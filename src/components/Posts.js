import React from 'react';
import { useState, useEffect } from 'react';
import { fetchPosts } from '../api';
import { Link } from 'react-router-dom';


const Posts = ({postId, setPostId, username}) => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetchPosts()
        .then(({data}) => setPosts(data.posts));
    }, [])
    
    console.log(posts);


<<<<<<< HEAD
    
    return ( <div> {posts.map((post, index) => 
        <div>
            <h2>{post.title}</h2>
            <h3>{post.description}</h3>
            <h3><strong>Price:</strong> {post.price}</h3>
            <h3><strong>Seller:</strong> {post.author.username}</h3>
            <h3><strong>Location:</strong> {post.location}</h3>
            <h3><strong>Will Deliver:</strong> {post.willDeliver}</h3>
=======
    function handleDelete() {
        // sets the posts 'isActive' to false
    }

    function handleEdit() {

    }


    return ( <div> 
        <h1>Posts</h1>
        <button><Link to='/createpost'>Create New Post</Link></button>
        {posts.map((post, index) =>
        <div><h2>{post.title}</h2>
        <h3>{post.description}</h3>
        <h3><strong>Price:</strong> {post.price}</h3>
        <h3><strong>Seller:</strong> {post.author.username}</h3>
        <h3><strong>Location:</strong> {post.location}</h3>
        <h3><strong>Will Deliver:</strong> {post.willDeliver}</h3>

        {/* {username !== {author} ? (
>>>>>>> c8d388a8b693ef3eeca8055abaefe48dce36cac4
            <button>Send Message</button>
        ) : null} 

        {username === {author} ? (
            <button onClick={handleEdit()}>Edit</button>,
            <button onClick={handleDelete()}>Delete</button>
        ) : null}
         */}

        </div> )}
    </div>)
}

export default Posts;