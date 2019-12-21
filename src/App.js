import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import AddTask from './AddTask';
import Tally from './Tally';
import CatHeader from './CatHeader';
import Task from './Task';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
        <AddTask />
        <Tally />
        <CatHeader />
        <Task />
      </div>
    );
  }
}

export default App;

