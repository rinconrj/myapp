import React, { Component } from "react";
import PropTypes from 'prop-types'
import './task.css'

class Task extends Component {

    StyleCompleted(){
        return {
            fontSize:'20px',
            color: this.props.task.done ?'gray' :'black',
            textDecoration: this.props.task.done ? 'line-through' :'none',
        }
    }
    render(){
        const {task} = this.props
        return <div style={this.StyleCompleted()}>
                 {task.title} - {task.description} - {task.done} - {task.id}
                <input type="checkbox" checked={task.done} onChange={this.props.checkDone.bind(this, task.id)}/>
                <button style={btnDelete} onClick={this.props.delTask.bind(this, task.id)}>
                    x
                </button> 
            </div>
                  
    }
}

Task.propTypes = {
    task: PropTypes.object.isRequired
}

const btnDelete = {
    fontSize:'12px',
    background:'#ea2027',
    color: '#fff',
    border: 'none',
    padding: '10px 15px',
    borderRadius: '50%',
    cursor:'pointer'
}

export default Task