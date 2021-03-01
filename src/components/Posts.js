import React from 'react';
import { useState, useEffect } from 'react';
import { fetchPosts, getCurrentToken } from '../api';
import { Link, useHistory } from 'react-router-dom';
import Post from './Post';
import SearchBar from './SearchBar'


const Posts = ({ loginToken, setPost, post, setPosts, posts }) => {

    const [searchPosts, setSearchPosts] = useState([]);

    useEffect(() => {
        fetchPosts(getCurrentToken())
        .then(({data}) => {
            setPosts(data.posts)
            setSearchPosts(data.posts)
        } )
    }, [])

    
    console.log(posts);

    const onSearchPosts = (searchTerm) => {
        setSearchPosts(posts.filter((post) => {
            const postName = post.title.toLowerCase();
            return postName.includes(searchTerm.toLowerCase());
        }))
    };
    



//<a href="/home" />
//via code redirect
//useHistory().push('stuff') -react-router-dom
//redirect via component <Redirect to="/" />

    return ( 
        <div> 
            <h1>Posts</h1>
            <SearchBar onSearchPosts={onSearchPosts}/>
            <button><Link to='/createpost'>Create New Post</Link></button>
            {searchPosts.map((post, index) => <Post key={index} post={post}></Post>)}
        </div>
    )
}

export default Posts;