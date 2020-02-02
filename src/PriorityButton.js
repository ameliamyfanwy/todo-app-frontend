import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class PriorityButton extends React.Component {

    state = {
        priority: false
    }

    togglePriority = () => {
        const currentPriority = this.state.priority;
        this.setState({
            priority: !currentPriority
        })
    }

    render () {
        let content = ['far', 'star']
        if (this.state.priority) {
            content = ['fas', 'star']
        }
        return (
        <button button type="button" className="star" onClick={this.togglePriority}>
            <FontAwesomeIcon 
                icon={content}
            />
        </button>
        )
    }
}

export default PriorityButton;