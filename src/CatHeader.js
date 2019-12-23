import React from 'react';
import './CatHeader.css'

class CatHeader extends React.Component {
    render() {
      return (
        <div className="row CatHeader">
            <div className="col-12">
                <h2>{this.props.name}</h2>
            </div>
        </div>
      );
    }
  }
  
export default CatHeader;