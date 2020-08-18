import React, {Component  } from "react";
import PropTypes from 'prop-types'
import Task from './task'

class Tasks extends Component {
    render(){
        return this.props.tasks.map(e=> <Task task={e} key={e.id} delTask={this.props.delTask} checkDone={this.props.checkDone}/>)
    }
}
Tasks.propTypes ={
    tasks: PropTypes.array.isRequired
}
export default Tasks