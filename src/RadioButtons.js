import React from 'react';
import './RadioButtons.css'

class RadioButtons extends React.Component {

    render() {
        return (
            <div className="row">
                <div className="col-12">
                    <form>
                        <div className="radio">
                            <label>
                                <input
                                    type="radio" 
                                    value="Home"
                                    name="radio"
                                    onChange={this.props.onChange}
                                    />
                                    Home
                            </label>
                            <label>
                                <input 
                                    type="radio"
                                    value="Work"
                                    name="radio"
                                    onChange={this.props.onChange}
                                    />
                                    Work
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    value="Life Admin"
                                    name="radio"
                                    onChange={this.props.onChange}
                                    />
                                    Life Admin
                            </label>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
};

export default RadioButtons;