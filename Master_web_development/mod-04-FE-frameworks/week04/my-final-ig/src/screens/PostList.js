import React, { useState, useEffect } from 'react'

import Post from './Post'
import { getPostList } from '../api/APIService'
import Spinner from '../components/Spinner'
import SearchBar from '../components/SearchBar'

function PostList() {
    const [posts, setPosts] = useState([])
    const [search, setSearch] = useState('')

    useEffect(() => {
        getPostList()
            .then(posts => {
                setPosts(posts)        
            });
    }, [])

    return (
        posts.length <= 0 ?
        <Spinner />
        :
        <div className="container-fluid">
            <div id="div-feed" className="row pt-3">
                <SearchBar search={search} onChange={(s) => setSearch(s.target.value)} />
                {
                    posts.filter(p => p.text.includes(search)).map((post) => (
                        <Post key={post.id} id={post.id} author={post.author.name} legend={post.text}
                            likes={post.likes} age={post.createdAt} image={post.image} comments={post.comments.length}
                            />
                    ))
                }
            </div>
        </div>
    )
}

export default PostList;