import React from 'react';
import './Task.css'

class Task extends React.Component {

    deleteClicked = () => {
        alert('You clicked the delete button')
    }

    editClicked = () => {
        alert('You clicked the edit button')
    }


    render() {
      return (
        <div>
            <div className="row task" style={{backgroundColor : this.props.color}}>
                <div className="col-12 col-md-9">
                    {this.props.item}
                    <button button type="button" className="star">&#9733;</button>
                </div>
                <div className="col-4 col-md-1 px-0 editoption d-flex justify-content-center">
                    <button type="button">&#10004;</button>
                </div>
                <div className="col-4 col-md-1 px-0 editoption d-flex justify-content-center">
                    <button type="button" onClick={this.editClicked}>&#9998;</button>
                </div>
                <div className="col-4 col-md-1 px-0 editoption d-flex justify-content-center">
                    <button type="button" onClick={this.deleteClicked}>&#10008;</button>
                </div>
            </div>
        </div>
      );
    }
  }
  
export default Task;


