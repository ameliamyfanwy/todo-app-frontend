import React from 'react';

class AddTask extends React.Component {
    render() {
      return (
        <div class="row">
            <div class="col-12">
                <form>
                <label>
                    Add task here:
                    <input type="text" name="name" />
                </label>
                <input type="submit" value="+" />
                </form>
            </div>
        </div>
      );
    }
  }
  
export default AddTask;