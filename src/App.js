import React , { Component } from 'react';
import UserDetails from './UserDetails';
import AddUser from './AddUser';
import classes from './App.module.css';

class App extends Component {
  render(){
    return (
      <div className={classes.App}>
        <UserDetails/>
        <AddUser/>
      </div>
    );
  }
}

export default App;