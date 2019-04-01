import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      userData: dummyData
    }
  }
 
  render() {
    return (
      <div className="App">
        {this.state.userData.map(user => 
            <PostContainer username={user} key={user.id} />
          )}    
      </div>

    );
  }
}

export default App;
