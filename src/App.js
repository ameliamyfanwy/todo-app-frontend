import React from 'react';
import './App.css';
import Header from './Header';
import AddTask from './AddTask';
import Tally from './Tally';
import CatHeader from './CatHeader';
import TaskList from './TaskList';
import RadioButtons from './RadioButtons';
import uuidv4 from 'uuid/v4';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrash, faEdit, faCheck, faStar as fasFaStar} from '@fortawesome/free-solid-svg-icons';
import { faStar as farFaStar} from '@fortawesome/free-regular-svg-icons';
import axios from 'axios';

library.add(faTrash, faEdit, faCheck, fasFaStar, farFaStar) ;


class App extends React.Component {

  state = {
    tasks: [
    ],
    taskCategory: "Home",
  }

  componentDidMount = () => {
    axios.get('https://nny7t787v2.execute-api.eu-west-2.amazonaws.com/dev/tasks')
    .then((response) => {
      this.setState({
        tasks: response.data.todolist
      })
    })
    .catch((error) => {
      console.error(error);
    });
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

  completeTask = (taskId) => {
    const tasksBeingUpdated = this.state.tasks;
    for (let i=0; i<tasksBeingUpdated.length; i++) {
      const task = tasksBeingUpdated[i];
      if(task.id === taskId) {
          task.completed = true;
          break;
      }
    }
    this.setState({
      tasks: tasksBeingUpdated.sort((a, b) => a.completed > b.completed)
    })
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <AddTask addTaskFunc={this.addTask} />
          <RadioButtons onChange={this.radioInputChanged} taskCategory={this.state.taskCategory} />
          <Tally taskGather={this.state.tasks} />
          <div className="row taskdetails">
            <div className="col-12 col-md-4">
              <CatHeader name="Home" />
              <TaskList taskGather={this.state.tasks} category="Home" color="#77567A"
                deleteTaskFunc={this.deleteTask}
                completedTaskFunc={this.completeTask}
              />
            </div>
            <div className="col-12 col-md-4">
              <CatHeader name="Work" />
              <TaskList taskGather={this.state.tasks} category="Work" color="#009999" deleteTaskFunc={this.deleteTask} completedTaskFunc={this.completeTask} />
            </div>
            <div className="col-12 col-md-4">
              <CatHeader name="Life Admin" />
              <TaskList taskGather={this.state.tasks} category="Life Admin" color="#6495ED" deleteTaskFunc={this.deleteTask} completedTaskFunc={this.completeTask} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

