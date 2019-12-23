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
          <Tally />
          <RadioButtons />
          <div className="row">
            <div className="col-12 col-md-4">
              <CatHeader />
              <Task />
              <Task />
            </div>
            <div className="col-12 col-md-4">
              <CatHeader />
              <Task />
            </div>
            <div className="col-12 col-md-4">
              <CatHeader />
              <Task />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

