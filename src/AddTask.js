import React from 'react';
import './AddTask.css'

class AddTask extends React.Component {
    render() {
      return (
        <div className="row">
            <div className="col-12 AddTask">
                <form>
                <label>
                    <input type="text" name="inputbox" placeholder="Add task here" />
                </label>
                <input type="submit" value="+" />
                </form>
            </div>
        </div>
      );
    }
  }
  
export default AddTask;