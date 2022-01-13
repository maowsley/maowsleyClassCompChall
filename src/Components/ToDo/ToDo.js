import React, {Component} from "react";
import "./Todo.css";
import { Container } from "react";

export default class ToDo extends React.Component {
  constructor(props) {
    super(props);

    this.state={
      newTask:"",
      list: []
    };
  }
  

  


  updateInput(key, value) {
    //have to update the react state to show chnage
    this.setState({[key]: value});
  }

  addTask() {
    //method used to create task with an id
    const newTask={
      id: 1 + Math.random(),
      value: this.state.newTask.slice()
    };


    //saved tasked copy
    const list = [...this.state.list];


    //add task to list
    list.push(newTask);

    //update and edit task
    this.setState({
      list,
      newTask:''
    });

    
  }

  render() {
    return (
      <div>
      <h2  className="ToDo">Create a ToDO List</h2>

      <div className="container">
        <div
          style={{
            padding: 30,
            textAlign: 'left',
            maxWidth: 500,
            margin: 'auto'
          }}
          ></div>
          Add a Task..
          <br/>
          <input type="text" placeholder="Add new Task Here" value={this.state.newTask}
          onChange={e => this.updateInput("newTask", e.target.value)}/>

            <button
            className="add-btn btn-floating"
            onClick={() => this.addTask()}
            disabled={!this.state.newTask.length}>

          <i className="material-icons"> + </i>
          </button>
          <br /> 
          <ul>
            {this.state.list.map(task => {
              return (
                <li key={task.id}>
                  {task.value}
                </li>
              );
            })}
            </ul>
          </div>
          </div>
    );
  }


        
  
}



