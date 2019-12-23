import React from 'react';
import './AddTask.css'

class AddTask extends React.Component {
    render() {
      return (
        <div className="row">
            <div className="col-12 AddTask">
                <form>
                <label>
                    Add task here:
                    <input type="text" name="name" />
                </label>
                <input type="submit" value="+" />
                </form>
            </div>
        </div>
      );
    }
  }
  
export default AddTask;