import React, {Component} from 'react';
import tasks from './sample/task.json'
import Tasks from './components/tasks'
import TaskForm from './components/TaskForm'
import Post from './components/Post'
class App extends Component {
  state = {
    tasks: tasks
  }

  addTask = (title, description)=>{
    const newTask = {
      title, description, done:false, id:this.state.tasks.length
    }
    this.setState({
      tasks: [...this.state.tasks, newTask]
    })
  }
  delTask =(id)=>{

    const newTasks = this.state.tasks.filter(item=>item.id !==id)
    this.setState({
      tasks: newTasks
    })
  }
  checkDone =(id)=>{
    const doneTasks = this.state.tasks.map(item=>{
      if(item.id ===id){
        item.done = !item.done 
      }
    return item
    })
    this.setState({
      tasks: doneTasks
    })
  }
  render(){
    return(
      <div>
        <TaskForm addTask={this.addTask}></TaskForm>
      <Tasks tasks={this.state.tasks} delTask={this.delTask} checkDone={this.checkDone}/>
      <Post/>
      </div>

    )
  }
}

export default App;
