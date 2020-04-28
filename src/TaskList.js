import React from 'react';
import Task from './Task';

class TaskList extends React.Component {
    render() {
        const category = this.props.category
        var sortedByPriority = this.props.taskGather.sort(function (a, b) {
            return b.priority - a.priority
        })
        var sortedByComplete = sortedByPriority.sort(function (a, b) {
            return a.completed - b.completed
        })
        //Priority is not being updated by the priority button
        return (
            <div>
                {sortedByComplete.filter(function (task) {
                    return task.category === category
                })
                    .map((taskItem) => <Task
                        key={this.props.id}
                        item={taskItem}
                        color={this.props.color}
                        deleteTaskFunc={this.props.deleteTaskFunc}
                        completedTaskFunc={this.props.completedTaskFunc}
                        priorityTaskFunc={this.props.priorityTaskFunc}
                    />)}
            </div>

        )

    }

}

export default TaskList;
