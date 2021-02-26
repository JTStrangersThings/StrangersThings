import React from 'react';
import { getCurrentToken } from '../api';
import { useHistory, useParams } from 'react-router-dom';


export const handleEdit = ({
loginToken,
  post,
  postTitle, 
  postDescription, 
  postPrice, 
  postLocation,
  willDeliver
}) => {

    const { postId } = useParams();

    fetch(`http://strangers-things.herokuapp.com/api/2010-UNF-RM-WEB-PT/posts/${postId}`, {
      method: "PATCH",
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



export const EditPostForm = ({ 
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
                <h2>Edit Post:</h2>
                <form onSubmit={e => {
                e.preventDefault();
                
                localStorage.getItem(`${loginToken}`);
                handleEdit({loginToken, postTitle, postDescription, postPrice, postLocation, willDeliver, postId});
                alert('Your post has been updated!');

                }} >
                <label>Title: </label>
                <input type='text' onChange={(e) => setPostTitle(e.target.value)} value={postTitle} >
                </input>
                <label>Description: </label>
                <input type='text' onChange={(e) => setPostDescription(e.target.value)} value={postDescription} >
                </input>
                <label>Price: </label>
                <input type='text' onChange={(e) => setPostPrice(e.target.value)} value={postPrice} >
                </input>
                <label>Location: </label>
                <input type='text' onChange={(e) => setPostLocation(e.target.value)} value={postLocation} >
                </input>
                <label>Will Deliver? </label>
                <input type='checkbox' value={willDeliver} onClick={(event) => setWillDeliver(event.target.checked)} >
                </input>
                <button type='submit'>Save</button>
            </form>
        </div>
    )

}
      
        