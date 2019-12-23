import React from 'react';
import './Header.css'

class Header extends React.Component {
    render() {
      return (
        <div className="row">
            <div className="col-12">
                <h1>My ToDoList App</h1>
            </div>
        </div>
      );
    }
  }
  
export default Header;