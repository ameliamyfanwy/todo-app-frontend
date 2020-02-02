import React from 'react';
import './Task.css'
import PriorityButton from './PriorityButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Task extends React.Component {

    deleteClicked = () => {
        this.props.deleteTaskFunc(this.props.item.id)
    }

    taskCompleted = () => {
        this.props.completedTaskFunc(this.props.item.id)
    }

    render() {

        let description;
        let taskStyle;

        if (this.props.item.completed ) {
            description = <div className="col-12 col-md-9 completedTask">
                            {this.props.item.description}
                          </div>;
            taskStyle = { backgroundColor: "#d9d3d9"};
        } else {
            description =   <div className="col-12 col-md-9">
                                {this.props.item.description}
                                <PriorityButton />
                            </div>;
            taskStyle = { backgroundColor: this.props.color };
        }

        return (
            <div>
                <div className="row task" style={taskStyle}>
                    {description}
                    <div className="col-4 col-md-1 px-0 editoption d-flex justify-content-center">
                        {!this.props.item.completed &&
                        <button type="button" onClick={this.taskCompleted}>
                            <FontAwesomeIcon
                                icon="check"
                            />
                        </button>
                        }
                    </div>
                    <div className="col-4 col-md-1 px-0 editoption d-flex justify-content-center">
                        <button type="button" onClick={this.editClicked}>
                            <FontAwesomeIcon
                                icon="edit"
                            />
                        </button>
                    </div>
                    <div className="col-4 col-md-1 px-0 editoption d-flex justify-content-center">
                        <button type="button" onClick={this.deleteClicked}>
                            <FontAwesomeIcon
                                icon="trash"
                            />
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Task;


