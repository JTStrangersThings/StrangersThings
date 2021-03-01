import React from 'react';
import { useState } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { getCurrentToken } from '../api';

export const createPost = async ({ 
  postTitle, 
  postDescription, 
  postPrice, 
  postLocation,
  willDeliver}) => {

      await fetch('https://strangers-things.herokuapp.com/api/2010-UNF-RM-WEB-PT/posts', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${getCurrentToken()}`
        },
        body: JSON.stringify({
          post: {
            title: postTitle,
            description: postDescription,
            price: postPrice,
            location: postLocation,
            willDeliver: willDeliver,
          }
        })
      }).then(response => response.json())
        .then(result => {
          console.log(result);
        })
        .catch(console.error);
  }

  

export const CreatePostForm = ({ 
  loginToken,
  postId,
  setPostId,
  postTitle, 
  setPostTitle,
  postDescription, 
  setPostDescription,
  postPrice, 
  setPostPrice,
  postLocation, 
  setPostLocation,
  willDeliver, 
  setWillDeliver }) => {



    return (
        <div>
            <h2>Create New Post:</h2>
            <form onSubmit={e => {
              e.preventDefault();
              console.log(postTitle, loginToken);
              localStorage.getItem(`${loginToken}`);
              createPost({loginToken, postTitle, postDescription, postPrice, postLocation, willDeliver, postId}); //import postId and/or willDeliver?
              alert('Your post has been created!');

            }} >
            <label>Title: </label>
              <input type='text' required onChange={(e) => setPostTitle(e.target.value)} value={postTitle} >
              </input>
              <label>Description: </label>
              <input type='text' required onChange={(e) => setPostDescription(e.target.value)} value={postDescription} >
              </input>
              <label>Price: </label>
              <input type='text' required onChange={(e) => setPostPrice(e.target.value)} value={postPrice} >
              </input>
              <label>Location: </label>
              <input type='text' required onChange={(e) => setPostLocation(e.target.value)} value={postLocation} >
              </input>
              <label>Will Deliver? </label>
              <input type='checkbox' value={willDeliver} onClick={(event) => setWillDeliver(event.target.checked)} >
              </input>
              <button type='submit'>Create Post</button>
            </form>
        </div>
    )
}