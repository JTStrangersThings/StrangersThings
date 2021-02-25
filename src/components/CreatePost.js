import React from 'react';
import { useState } from 'react';

const postProps = {
  loginToken,
  postId,
  setPostId,
  postDescription, 
  setPostDescription,
  postPrice, 
  setPostPrice,
  postLocation, 
  setPostLocation,
  willDeliver, setWillDeliver
}

export const createPost = async ({ 
  loginToken,
  postTitle, 
  postDescription, 
  postPrice, 
  postLocation }) => {

    async function handleClick() {
      await fetch('https://strangers-things.herokuapp.com/api/2010-UNF-RM-WEB-PT/posts', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${loginToken}`
        },
        body: JSON.stringify({
          post: {
            title: postTitle,
            description: postDescription,
            price: postPrice,
            location: postLocation,
            willDeliver: true
          }
        })
      }).then(response => response.json())
        .then(result => {
          console.log(result);
        })
        .catch(console.error);
    }
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
              createPost({loginToken, postTitle, postDescription, postPrice, postLocation}) //import postId and/or willDeliver?

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
              <input type='checkbox' checked={checked} required onChange={(event) => setWillDeliver(event.target.checked)} value={willDeliver}>
              </input>
              <button onClick={handleClick}>Create Post</button>
            </form>
        </div>
    )
}

handleCheckBox = e => {
  const {
    target: { checked },
  } = e;
  this.setState({
    form: {
      ...this.state.form,
      checked,
    }
  })
}