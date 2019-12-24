import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import AddTask from './AddTask';
import Tally from './Tally';
import CatHeader from './CatHeader';
import Task from './Task';
import RadioButtons from './RadioButtons';


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <AddTask />
          <Tally count="4" />
          <RadioButtons />
          <div className="row taskdetails">
            <div className="col-12 col-md-4">
              <CatHeader name="Home" />
              <Task color="#77567A" name="Load dishwasher" />
              <Task color="#77567A" name="Take the bins out" />
            </div>
            <div className="col-12 col-md-4">
              <CatHeader name="Work" />
              <Task color="#009999" name="2020/21 OPEX budget" />
            </div>
            <div className="col-12 col-md-4">
              <CatHeader name="Life Admin" />
              <Task color="#6495ED" name="Renew passport" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

