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
        let content = "edit"
        if (this.state.priority) {
            content ="trash"
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