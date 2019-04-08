import React, { Component } from 'react';
import './App.css';
import PostContainer from './components/PostContainer/PostContainer';
import CommentSection from './components/CommentSection/CommentSection';
import SearchBar from './components/SearchBar/SearchBar';
import dummyData from './dummyData';

class App extends Component {
  constructor() {
  super();
  this.state = {
    userData: []
    }
  }

componentDidMount() {
  this.setState({userData: dummyData})
}


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            <SearchBar />
            <CommentSection />
            <PostContainer />
          </p>
        </header>
      </div>
    );
  }
}

export default App;
