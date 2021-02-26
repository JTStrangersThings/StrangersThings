import React from 'react';
import { useState, useEffect } from 'react';
import { fetchPosts, getCurrentToken } from '../api';
import { Link, useHistory } from 'react-router-dom';
import Post from './Post';


const Posts = ({ loginToken, setPost, post }) => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetchPosts(getCurrentToken())
        .then(({data}) => setPosts(data.posts))
    }, [])

    
    console.log(posts);



//<a href="/home" />
//via code redirect
//useHistory().push('stuff') -react-router-dom
//redirect via component <Redirect to="/" />

    return ( 
        <div> 
            <h1>Posts</h1>
            <button><Link to='/createpost'>Create New Post</Link></button>
            {posts.map((post, index) => <Post key={index} post={post} ></Post>)}
        </div>
    )
}

export default Posts;