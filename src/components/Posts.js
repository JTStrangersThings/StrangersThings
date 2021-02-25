import React from 'react';
import { useState, useEffect } from 'react';
import { fetchPosts } from '../api';


const Posts = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetchPosts()
        .then(({data}) => setPosts(data.posts));
    }, []) //[setPosts]
    
    console.log(posts);


    
    return ( <div> {posts.map((post, index) => 
        <div>
            <h2>{post.title}</h2>
            <h3>{post.description}</h3>
            <h3><strong>Price:</strong> {post.price}</h3>
            <h3><strong>Seller:</strong> {post.author.username}</h3>
            <h3><strong>Location:</strong> {post.location}</h3>
            <h3><strong>Will Deliver:</strong> {post.willDeliver}</h3>
            <button>Send Message</button>
        </div> )}
    </div>)
}

export default Posts;