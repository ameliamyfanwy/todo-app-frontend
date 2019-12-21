import React from 'react';
import './Task.css'

class Task extends React.Component {
    render() {
      return (
        <div>
            <div class="row task cat2task">
                <div class="col-12 col-md-4">
                    <div class="col-12 col-md-9">
                        Circulate report
                        <button button type="button" class="star">&#9733;</button>
                    </div>
                    <div class="col-4 col-md-1 px-0 editoption d-flex justify-content-center"><button type="button">&#10004;</button></div>
                    <div class="col-4 col-md-1 px-0 editoption d-flex justify-content-center"><button type="button">&#9998;</button></div>
                    <div class="col-4 col-md-1 px-0 editoption d-flex justify-content-center"><button type="button">&#10008;</button></div>
                </div>
            </div>
        </div>
      );
    }
  }
  
export default Task;


