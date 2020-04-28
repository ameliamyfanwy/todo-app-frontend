import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class PriorityButton extends React.Component {

    render () {
        let content = ['far', 'star']
        if (this.props.task.priority) {
            content = ['fas', 'star']
        }
        return (
        <button button type="button" className="star" /*onClick={this.togglePriority}*/>
            <FontAwesomeIcon 
                icon={content}
            />
        </button>
        )
    }
}

export default PriorityButton;