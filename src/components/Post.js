import React from 'react';
import { useHistory } from 'react-router-dom';
import { getCurrentToken } from '../api';
import styled from 'styled-components';
import '../components/post.css';

export default function Post (props) {
    const {
        post,
        setPosts,

        // handleEdit = () => {},
        // handleDelete = () => {}
    } = props


    console.log(post);
    const postId = post._id;


    const history = useHistory();


    function handleDelete(e) {
        e.preventDefault();
        fetch(`https://strangers-things.herokuapp.com/api/2010-UNF-RM-WEB-PT/posts/${postId}`, {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${getCurrentToken()}`
        }
        }).then(response => response.json())
        .then(result => {
            console.log(result);
        })
        .catch(console.error);
        alert('Your post has been deleted!');

        // const newPosts = post.filter(post => post._id !== postId);
        // setPosts(newPosts);
    }

    if(!post) {
        return <div></div>
    }

    if(post.active === true) {
    return (
        <div class="post-card">
            <h2 className="post-title">{post.title}</h2>
            <div className="post-content">
            <h3>{post.description}</h3>
            <h3><strong>Price:</strong> {post.price}</h3>
            <h3><strong>Seller:</strong> {post.author.username}</h3>
            <h3><strong>Location:</strong> {post.location}</h3>
            <h3><strong>Will Deliver:</strong> {post.willDeliver}</h3>
            </div>

        {post.isAuthor ? (
            <div className="post-card-button">
            <button onClick={() => history.push('/editpost/${postId}')}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
            </div>
        ) :
        <div className="post-card-button">                 
        <button onClick={() => history.push(`/messages/${postId}`)}>
           Send Message
        </button>
        </div>}
        </div>
    )}

    else return <div></div>
}