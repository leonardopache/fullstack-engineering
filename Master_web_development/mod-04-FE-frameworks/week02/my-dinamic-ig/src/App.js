import React from 'react'
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import PostList from "./components/PostList";
import dataPost from "./data/posts.json";
import Profile from "./components/Profile";
import Spinner from './components/Spinner';

const avatar= "https://picsum.photos/id/237/200";
const username= "@leonardo";
const bio= "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua";

class App extends React.Component {
  state = {
    search: "",
    posts: [],
    viewPost: true
  }

  searchText(search){
    this.setState({ search: search.target.value });
  }

  changeSection(viewPost){
    this.setState({ viewPost });
  }

  incrementLike(pos){
    this.state.posts.forEach((actual, index) => { 
        if (index === pos){
          actual.like ++;
        }
      }
    )
    this.setState({ posts: this.state.posts});
  }

  componentDidMount(){
    setTimeout(()=>{this.setState({ posts: dataPost.postList })}, 3000)
  }

  render(){
    console.log(this.state.posts);
    return (
      <div className="App">
        <Header onChange={(viewPost) => this.changeSection(viewPost)}/>
        { this.state.viewPost ? 
          <div className="container">
            <SearchBar search={this.state.search} onChange={(s) => this.searchText(s)}/>
            { this.state.posts.length <= 0? 
            <Spinner />
            : 
            <PostList posts={this.state.posts} filterText={this.state.search} onChange={(pos) => this.incrementLike(pos)}/>}

            
          </div>
          :
          <div className="text-center pt-5">
            <Profile avatar={avatar} username={username} bio={bio} />
          </div>
        }
      </div>
    );
  }
}

export default App;
