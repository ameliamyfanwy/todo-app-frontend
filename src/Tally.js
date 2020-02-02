import React from 'react';

class Tally extends React.Component {

    render() {

      let outstandingTasks = this.props.taskGather.filter(task => task.completed !== true);
      const outstandingCount = outstandingTasks.length;

      return (
        <div className="row">
            <div className="col-12">
                <p>Number of tasks to complete: {outstandingCount}</p>
            </div>
        </div>
      );
    }
  }
  
export default Tally;