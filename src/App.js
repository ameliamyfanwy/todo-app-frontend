import React from 'react';
import logo from './logo.svg';
import './App.css';
import Task from './Task'
import Tally from './Tally'
import AddTask from './AddTask'
import Header from './Header'
import CatHeader from './CatHeader'

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

