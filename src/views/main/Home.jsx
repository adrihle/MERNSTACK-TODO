import React from 'react'
import axios from 'axios';
import PostPreview from '../../components/PostPreview'


class Home extends React.Component {

    constructor(props){
      super(props);
      this.state = {
        posts: []
      }
    }
  
    async componentDidMount() {
        await axios.get('http://localhost:4000/posts/')
        .then((res) => {
          this.setState({ posts: res.data })
        })
    }
  
    render() {
      let posts = this.state.posts.map((post, i) => {
          return <PostPreview 
                    key={i}
                    parentMethod={this.props.parentMethod}
                    postId={post.id}
                    date={post.created_at} 
                    title={post.title}
                    />
      })
      return (
        <div className="mb-5 pb-5">
          {posts}
        </div>
      );
    }
  }
  
  export default Home;
  