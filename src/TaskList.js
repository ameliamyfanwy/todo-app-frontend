import React from 'react';
import Task from './Task';

class TaskList extends React.Component {
    render() {
        return (
            <div>
                {this.props.taskGather.map((taskItem)=><Task item={taskItem.description}/>)}
            </div>
        )

    }

}

export default TaskList;