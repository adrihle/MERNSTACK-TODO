//Dependencies
import React from 'react'
import axios from 'axios'
import scrollToComponent from 'react-scroll-to-component'
//Components
import ExpandedPost from '../../components/ExpandedPost'
import CommentBox from '../../components/CommentBox'
import Note from '../../components/Note'

class PostView extends React.Component {
    _isMounted = false

    constructor(props){
        super(props)
        this.state = {
            comments: [],
            post: {},
            handleComment: '',
            postId: ''
        }
    }

    async componentDidMount(){
        this._isMounted = true
        this.getComments()
        this.getPost()
        
    }

    getPost = async () => {
        const { match: { params }} = this.props
        await axios.get('http://localhost:4000/posts/' + params.id)
        .then((res) => {
            if(this._isMounted){
                this.setState({ post: res.data[0] })
                this.setState({ postId: params.id })
            }
        })
    }

    getComments = () => {
        
        const { match: { params }} = this.props
        
        axios.get('http://localhost:4000/comments/' + params.id)
        .then((res) => {
                this.setState({
                    comments: res.data
                })    
        })
        
        
    }

    postComment = async () => {
        await axios.post('http://localhost:4000/comments', {
            postid: this.state.postId,
            description: this.state.handleComment,
            author: 'adrihfly'
        })
        this.setState({ handleComment: '' })
        this.getComments()
        scrollToComponent(this.lastComment)
    }

    
    render(){
        let comments = this.state.comments.map((comment, i) => {
            const arr = this.state.comments
            console.log(i, (arr.length -1) )
            if (i === (arr.length -1)){
                return <Note key={i} title={comment.description} ref={((lastComment => this.lastComment = lastComment))}/>
            }else{
                return <Note key={i} title={comment.description} />
            }
        })
        return(
            <div>
                <ExpandedPost 
                    date={this.state.post.created_at} 
                    title={this.state.post.title} 
                    description={this.state.post.description} />
                    <div className="container mb-5 pb-5">
                        {comments}
                    </div>
                <CommentBox 
                    refi={((input) => {this.input = input})}
                    type='text'
                    onChange={comment => {
                        this.setState({
                            handleComment: comment.target.value
                        })
                    }}
                    value={this.state.handleComment}
                    onClick={() => this.postComment()}
                    />
            </div>
        );
    }
}

export default PostView;