import React, { useEffect, useState } from 'react';
import { userProfile } from '../api';
import { getCurrentToken } from '../api';
import Post from './Post';
import Message from './Message';


const Profile = () => {

    const [messages, setMessages] = useState([]);
    const [userPosts, setUserPosts] = useState([]);
    const [currentUser, setCurrentUser] = useState('');


    useEffect(() => {
        userProfile(getCurrentToken())
        .then(({data}) => setMessages(data.messages))
    }, [])

    useEffect(() => {
        userProfile(getCurrentToken())
        .then(({data}) => setUserPosts(data.posts))
    }, [])

    useEffect(() => {
        userProfile(getCurrentToken())
        .then(({data}) => setCurrentUser(data.username))
    }, [])

       
        console.log(userPosts);
        console.log(messages)
    
        return (
            <div>
                <h1>Welcome to your profile, {currentUser}!</h1>
                <h2>Messages</h2>
                {messages.map((message, index) => <Message currentUser={currentUser} key={index} message={message}/>)}
                <h2>Your Posts</h2>
                {userPosts.map((post, index) => <Post key={index} post={post}/>)}
            </div>
        )
    }

export default Profile;
