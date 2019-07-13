import React from 'react';
import './App.css';
import axios from 'axios';
import scrollToComponent from 'react-scroll-to-component'
import NavBar from './components/NavBar'
import PostPreview from './components/PostPreview'
import BottomNav from './components/BottomNav'

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      tasks: [],
      handleTask: '',
      api: 'http://localhost:4000/'
    }
  }

  componentDidMount() {
    this.getTasks()
  }

  async getTasks() {
    await axios.get(this.state.api)
    .then((res) => {
      this.setState({ tasks: res.data })
    })
  }

  async deleteTask(id, i) {
    await axios.delete(this.state.api + id)
      .then(console.log('deleted id = ' + id))
    let tasks = this.state.tasks
    tasks.splice (i, 1)
    this.setState({ tasks })
  }

  async postTask() {
    await axios.post(this.state.api, {
      title: this.state.handleTask,
      description: 'Pushed correctly'
    }).then(console.log(this.state.handleTask + ' insertada en db campeon sigue asi te queremos!'))
    await this.getTasks()
    this.setState({ handleTask: '' })
    this.textInput.focus()
    scrollToComponent(this.lastPost)
  }

  handleKeyPress = (e) => {
    if (e.key === 'Enter'){
      this.postTask()
    }
  }

  render() {
    let tasks = this.state.tasks.map((task, i) => {
      const arr = this.state.tasks
      if (i === (arr.length-1)){
        return <PostPreview 
                  key={i} 
                  title={task.title}
                  date={task.created_at}
                  author='Adrian'
                  description={task.description} 
                  delete={ () => this.deleteTask(task.id, i)}
                  />
      }else{
        return <PostPreview
                  key={i} 
                  title={task.title}
                  date={task.created_at}
                  author='Adrian'
                  description={task.description}  
                  delete={ () => this.deleteTask(task.id, i)}/>
      }
    })
    return (
      <div className="con">
        <NavBar />
      <div className="mb-5 pb-5">
      {tasks}
      </div>
      <BottomNav /> 
    </div>
    );
  }
}

export default App;
