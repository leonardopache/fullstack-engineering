import axios from 'axios';
import React from 'react';

import Spinner from './Spinner';
import SearchBar from './SearchBar';
import Post from './Post';

class PostList extends React.Component {
    state = {
        search: "",
        posts: []
    }
    searchText(search) {
        this.setState({ search: search.target.value });
    }

    incrementLike(id) {
        this.state.posts.forEach((actual) => {
            if (actual.id === id) {
                actual.likes++;
            }
        })
        this.setState({ posts: this.state.posts });
    }
    componentDidMount() {
        console.log(this.props.user)
        if (this.props.user.id !== null && this.state.posts.length === 0) {
            axios.get("http://three-points.herokuapp.com/api/posts", { withCredentials: false })
                .then(response => {
                    console.log(response)
                    setTimeout(() => { this.setState({ posts: response.data }) }, 3000)
                })
                .catch(err => {
                    console.log(err.response.data.message)
                    if (err.response.status === 401)
                        this.props.changeSection('login')
                });
        } else {
            this.props.changeSection('login');
        }
    }

    render() {
        return (
            this.state.posts.length <= 0 ?
            <Spinner />
            :
            <div className="container-fluid">
                <div id="div-feed" className="row pt-3">
                    <SearchBar search={this.state.search} onChange={(s) => this.searchText(s)} />
                    {
                        this.state.posts.filter(p => p.text.includes(this.state.search)).map((post) => (
                            <Post key={post.id} id={post.id} author={post.author.name} legend={post.text}
                                likes={post.likes} age={post.createdAt} image={post.image} comments={post.comments.length}
                                onChange={(id) => this.incrementLike(id)} />
                        ))
                    }
                </div>
            </div>
        )
    }
}

export default PostList;