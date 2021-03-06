import React from 'react';
import './AddTask.css'

class AddTask extends React.Component {

  state = {
    taskDescription: "Add task here"
  }

  addTask = () => {
    this.props.addTaskFunc(this.state.taskDescription);
    this.mainInput.value = "";
    this.setState({
      taskDescription : ''
    });
  }

  taskDescriptionChanged = (event) => {
    this.setState({
      taskDescription: event.target.value
    })
  }

  render() { 
    return (
      <div className="row">
        <div className="col-12 AddTask">
          <label>
            <input
              ref={(ref) => this.mainInput= ref}
              type="text"
              name="inputbox"
              placeholder="Add task here"
              onChange={this.taskDescriptionChanged} />
          </label>
          <input type="submit" value="+" onClick={this.addTask} />
        </div>
      </div>
    );
  }
}

export default AddTask;