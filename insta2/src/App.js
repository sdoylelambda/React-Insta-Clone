import React, { Component } from 'react';
import './App.css';
import dummyData from './components/dummyData';
import PostContainer from './components/PostContainer/PostContainer';
// import CommentSection from './components/CommentSection/CommentSection';
import SearchBar from './components/SearchBar/SearchBar';

class App extends Component {
  constructor() {
    super();
    this.state = {
      userData: [],
      loggedIn: false,
      filteredPosts: []
    }
  }

  addNewComment = (event, postId, commentText) => {
    event.preventDefault();
    console.log("add comment", event, commentText);
    if(this.state.comments !== undefined) {
    const newComment = {username: "userTest", text: commentText}
    const newPost = this.state.userData.filter(data => data.id === postId)
    const copiedComments = [...this.state.comments, newComment]
    // const arrayWithNewComment = copiedComments.push(commentText)
    this.setState({comments: copiedComments})
    }
}

  componentDidMount() {
    this.setState({userData: dummyData})
  }

  searchPostsHandler = e => {
    const Data = this.state.userData.filter(p => {
      if (p.username.includes(e.target.value)) {
        console.log("search post handler")
        return p;
      }
    });
    this.setState({ filteredPosts: Data });
  };
 
  render() {
    return (
      <div className="App">
        
        
        
        <SearchBar  searchTerm={this.state.searchTerm}
          searchPosts={this.searchPostsHandler} />
       
        <PostContainer userData={this.state.userData} addNewComment={this.addNewComment}/>

       
       
      </div>
    );
  }
}

export default App;
