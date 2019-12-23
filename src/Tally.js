import React from 'react';

class Tally extends React.Component {
    render() {
      return (
        <div className="row">
            <div className="col-12">
                <p>Number of tasks to complete: {this.props.count}</p>
            </div>
        </div>
      );
    }
  }
  
export default Tally;