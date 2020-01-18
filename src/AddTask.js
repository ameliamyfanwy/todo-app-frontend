import React from 'react';
import './AddTask.css'

class AddTask extends React.Component {

  addTask = () => {
    this.props.addTaskFunc();
  }

    render() {
      return (
        <div className="row">
            <div className="col-12 AddTask">
                <label>
                    <input type="text" name="inputbox" placeholder="Add task here" />
                </label>
                <input type="submit" value="+" onClick={this.addTask} />
            </div>
        </div>
      );
    }
  }
  
export default AddTask;