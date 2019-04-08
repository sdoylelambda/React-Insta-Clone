import React, { Component } from 'react';
import './App.css';
import PostContainer from './components/PostContainer/PostContainer';
import CommentSection from './components/CommentSection/CommentSection';
import SearchBar from './components/SearchBar/SearchBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            <CommentSection />
            <SearchBar />
            <PostContainer />
          </p>
        </header>
      </div>
    );
  }
}

export default App;
