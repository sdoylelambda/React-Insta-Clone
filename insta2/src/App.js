import React, { Component } from 'react';
import './App.css';
import dummyData from './components/dummyData';
import PostContainer from './components/PostContainer/PostContainer';
import CommentSection from './components/CommentSection/CommentSection';
import SearchBar from './components/SearchBar/SearchBar';

class App extends Component {
  constructor() {
    super();
    this.state = {
      userData: [],
      loggedIn: false
    }
  }

  componentDidMount() {
    this.setState({userData: dummyData})
  }
 
  render() {
    return (
      <div className="App">
        
        
        
        <SearchBar />
        <PostContainer userData={this.state.userData} />
       
      </div>
    );
  }
}

export default App;
