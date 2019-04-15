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
      userData: []
    }
  }

  componentDidMount() {
    this.setState({userData: userData})
  }
 
  render() {
    return (
      <div className="App">
        <SearchBar />
        {/* {this.state.userData.map(userData => (<PostContainer instagram={this.state.instagram} />  */}
          {this.state.userData.map(userData => (<PostContainer key={instagram.id} /> 
      </div>
    );
  }
}

export default App;
