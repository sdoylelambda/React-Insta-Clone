import React, { Component } from 'react';
import './App.css';
import dummyData from './dummyData';
import PostContainer from './components/PostContainer/PostContainer';
import CommentSection from './components/CommentSection/CommentSection';
import SearchBar from './components/SearchBar/SearchBar';

class App extends Component {
  constructor(props) {
    super(props);
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
        <SearchBar />
        {this.state.userData.map(post => ( 
           <PostContainer post={post} key={post.id} /> 
        ))}
        <CommentSection />
      </div>
    );
  }
}

export default App;
