import React from 'react';
import Task from './Task';

class TaskList extends React.Component {
    render() {
        const category = this.props.category
        var sortedTasks = this.props.taskGather.sort(function (a, b) {
            return a.completed - b.completed
        })
        return (
            <div>
                {sortedTasks.filter(function (task) {
                    return task.category === category
                })
                    .map((taskItem) => <Task
                        key={this.props.id}
                        item={taskItem}
                        color={this.props.color}
                        deleteTaskFunc={this.props.deleteTaskFunc}
                        completedTaskFunc={this.props.completedTaskFunc}
                    />)}
            </div>

        )

    }

}

export default TaskList;
