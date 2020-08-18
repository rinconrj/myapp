import React, { Component } from "react";

export default class TaskForm extends Component {
    state = {
        title:'',
        description:''
    }
    onSubmit = e =>{
        this.props.addTask(this.state.title, this.state.description)
        this.setState({
            title:'',
            description:''
        })
        e.preventDefault()
    }
    onChange = e=> {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render(){

        return(
            <form onSubmit={this.onSubmit}>
                <input type='text' name='title' placeholder="write a task" onChange={this.onChange} value={this.state.title}></input>
                <br/>
                <br/>
                <textarea placeholder="write a description" name='description' onChange={this.onChange} value={this.state.description}></textarea>
                <input type="submit"/>
            </form>
        )
    }

}

