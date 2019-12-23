import React from 'react';
import './RadioButtons.css'

class RadioButtons extends React.Component {
    render() {
      return (
            <div class="row">
                <div class="col-12">
                    <form>
                        <div className="radio">
                        <label>
                            <input type="radio" value="home" checked={true} /> Home
                        </label>
                        <label>
                            <input type="radio" value="work" /> Work
                        </label>
                        <label>
                            <input type="radio" value="lifeadmin" /> Life Admin
                        </label>
                    </div>
                </form>
                </div>
            </div>
        )
    }
};

export default RadioButtons;