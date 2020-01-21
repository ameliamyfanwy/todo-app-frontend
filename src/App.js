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


class App extends React.Component {

  state = {
    tasks: [
      { id: 1, description: "Load dishwasher", category: "Home", completed: false },
      { id: 2, description: "Take the bins out", category: "Home", completed: false },
      { id: 3, description: "2020/21 budget", category: "Work", completed: false },
      { id: 4, description: "Renew passport", category: "Life Admin", completed: false },
    ]
  }

  deleteTask = (taskId) => {
    const updatedTasks = this.state.tasks.filter(item => item.id !== taskId);
    this.setState({
      tasks: updatedTasks
    })
  }

  addTask = (taskDescription) => {
    const taskToAdd = {
      id: 7,
      description: taskDescription,
      category: "Home",
      completed: false
    };
    const currentTasks = this.state.tasks;
    currentTasks.push(taskToAdd);
    this.setState({
      tasks: currentTasks
    })
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <AddTask addTaskFunc={this.addTask} />
          <RadioButtons />
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

