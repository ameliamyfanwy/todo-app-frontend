import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import AddTask from './AddTask';
import Tally from './Tally';
import CatHeader from './CatHeader';
import Task from './Task';
import TaskList from './TaskList';
import RadioButtons from './RadioButtons';
import uuidv4 from 'uuid/v4';


class App extends React.Component {

  state = {
    tasks: [
      { id: uuidv4(), description: "Load dishwasher", category: "Home", completed: false },
      { id: uuidv4(), description: "Take the bins out", category: "Home", completed: false },
      { id: uuidv4(), description: "2020/21 budget", category: "Work", completed: false },
      { id: uuidv4(), description: "Renew passport", category: "Life Admin", completed: false },
    ],
    taskCategory: "",
  }

  deleteTask = (taskId) => {
    const updatedTasks = this.state.tasks.filter(item => item.id !== taskId);
    this.setState({
      tasks: updatedTasks
    })
  }

  addTask = (taskDescription) => {
    const taskToAdd = {
      id: uuidv4(),
      description: taskDescription,
      category: this.state.taskCategory,
      completed: false
    };
    console.log("Add task");
    console.log(taskToAdd);
    const currentTasks = this.state.tasks;
    currentTasks.push(taskToAdd);
    this.setState({
      tasks: currentTasks
    })

  }

  radioInputChanged = (event) => {
    this.setState({
      taskCategory: event.target.value
    });
  }


  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <AddTask addTaskFunc={this.addTask} />
          <RadioButtons onChange={this.radioInputChanged} />
          <Tally count={this.state.tasks.length} />
          <div className="row taskdetails">
            <div className="col-12 col-md-4">
              <CatHeader name="Home" />
              <TaskList taskGather={this.state.tasks} category="Home" color="#77567A" deleteTaskFunc={this.deleteTask} />
            </div>
            <div className="col-12 col-md-4">
              <CatHeader name="Work" />
              <TaskList taskGather={this.state.tasks} category="Work" color="#009999" deleteTaskFunc={this.deleteTask} />
            </div>
            <div className="col-12 col-md-4">
              <CatHeader name="Life Admin" />
              <TaskList taskGather={this.state.tasks} category="Life Admin" color="#6495ED" deleteTaskFunc={this.deleteTask} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

