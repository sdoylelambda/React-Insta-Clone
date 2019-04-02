import React, { Component } from 'react';
import './App.css';
import dummyData from './dummyData';
import PostContainer from './components/PostContainer/PostContainer';
import CommentSection from './components/CommentSection/CommentSection';
import SearchBar from './components/SearchBar/SearchBar';

class App extends Component {
  constructor() {
    super();
    this.state = {

      // brackets?
      userData: {dummyData}
    }
  }
 
  render() {
    return (
      <div className="App">
        {/* {this.state.userData.map(user =>  */}
            {/* <CommentSection instagram={this.state.instagram} /> */}
            <SearchBar />
            <PostContainer />
            <CommentSection />
      </div>
    );
  }
}

export default App;
