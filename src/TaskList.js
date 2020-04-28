import React from 'react';
import Task from './Task';

class TaskList extends React.Component {
    render() {
        const category = this.props.category
        var sortedByComplete = this.props.taskGather.sort(function (a, b) {
            return a.completed - b.completed
        })
        console.log("this.props.taskGather: " + JSON.stringify(this.props.taskGather))
        console.log("sortedByComplete: " + JSON.stringify(sortedByComplete.priority))
        var sortedByPriority = sortedByComplete.sort(function (a, b) {
            return b.priority - a.priority
        })
        //Priority is not being updated by the priority button
        return (
            <div>
                {sortedByPriority.filter(function (task) {
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
