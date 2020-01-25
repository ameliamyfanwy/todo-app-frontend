import React from 'react';
import './Task.css'

class Task extends React.Component {

    deleteClicked = () => {
        this.props.deleteTaskFunc(this.props.item.id)
    }

    taskCompleted = () => {
        this.props.completedTaskFunc(this.props.item.id)
    }

    render() {

        let description;

        if (this.props.item.completed ) {
            description = <div className="col-12 col-md-9 completedTask">
            {this.props.item.description}
            <button button type="button" className="star">&#9733;</button>
            </div>
        } else {
            description =   <div className="col-12 col-md-9">
        {this.props.item.description}
        <button button type="button" className="star">&#9733;</button>
    </div>
        }


        return (
            <div>
                <div className="row task" style={{ backgroundColor: this.props.color }}>
                    {description}
                    <div className="col-4 col-md-1 px-0 editoption d-flex justify-content-center">
                        {!this.props.item.completed &&
                        <button type="button" onClick={this.taskCompleted}>&#10004;</button>
                        }
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


