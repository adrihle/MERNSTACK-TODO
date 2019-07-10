import React from 'react';
import './App.css';
import Note from './components/Note';
import axios from 'axios';

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
    await axios.delete(this.state.api + id).then(console.log('deleted id = ' + id))
    let tasks = this.state.tasks
    tasks.splice (i, 1)
    this.setState({ tasks })
  }

  async postTask() {
    await axios.post(this.state.api, {
      task: this.state.handleTask,
      status: 1
    }).then(console.log(this.state.handleTask + ' insertada en db campeon sigue asi te queremos!'))
    await this.getTasks()
    this.setState({ handleTask: '' })
    this.textInput.focus()
  }

  handleKeyPress = (e) => {
    if (e.key === 'Enter'){
      this.postTask()
    }
  }

  render() {
    let tasks = this.state.tasks.map((task, i) => {
      return <Note key={i} text={task.task} delete={ () => this.deleteTask(task.id, i)}/>
    })
    return (
      <div className="con">
      <div className="header">TODO CRUD TESTING</div>
      <div className="mb-5 pb-5">
      {tasks}
      </div>
      <div 
          className="btn"
          //CUIDADO!!!!!!!!!! si defines el metodo sin el bind, se queda en bucle añadiendo filas vacias
          //MUCH CARE!!!!!! if u insert the function postTask without bind method
          //the app go to bucle and add empty rows to db, for me more than 1k in 6 seconds :O
          onClick={this.postTask.bind(this)}
          ref={((add) => this.add = add)}
          >
            +
      </div>
      <input
        type="text"
        className="textInput"
        ref={((input) => {this.textInput = input})}
        onChange={task => {
          this.setState({
            handleTask: task.target.value
          })
        }}
        value={this.state.handleTask}
        onKeyPress={this.handleKeyPress.bind(this)}
      />  
    </div>
    );
  }
}

export default App;
