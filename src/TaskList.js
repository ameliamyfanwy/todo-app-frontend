import React from 'react';
import Task from './Task';

class TaskList extends React.Component {
    render() {
        const category = this.props.category
        return (
            <div>
                {this.props.taskGather.filter(function (task) {
                    return task.category === category
                })
                    .map((taskItem) => <Task key={this.props.id} item={taskItem} color={this.props.color} deleteTaskFunc={this.props.deleteTaskFunc} />)}
            </div>
        )

    }

}

export default TaskList;
