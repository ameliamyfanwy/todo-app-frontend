import React from 'react';
import Task from './Task';

class TaskList extends React.Component {
    render() {
        const category = this.props.category
        return (
            <div>
              {this.props.taskGather.filter(function (task) {
                    return task.category === category})
                    .map((taskItem)=><Task item={taskItem.description}/>)}
            </div>
        )

    }

}

export default TaskList;
