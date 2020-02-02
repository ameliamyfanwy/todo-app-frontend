import React from 'react';

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
        let content = null;
        if (this.state.priority) {
            content = "&#9733;"
        }
        else {
            content = "&#9734;"
        }
        return (
        <button button type="button" className="star" onClick={this.togglePriority}>{content}</button>
        )
    }
}

export default PriorityButton;