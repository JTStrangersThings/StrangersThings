import React, { useEffect, useState } from 'react';
import { userProfile } from '../api';
import { getCurrentToken } from '../api';
import Post from './Post';
import Message from './Message';
import '../components/profile.css';


const Profile = () => {

    const [messages, setMessages] = useState([]);
    const [userPosts, setUserPosts] = useState([]);
    const [currentUser, setCurrentUser] = useState('');


    useEffect(() => {
        if(getCurrentToken()) {
        userProfile(getCurrentToken())
        .then(({data}) => setMessages(data.messages))
    }
    }, [])

    useEffect(() => {
        if(getCurrentToken()){
        userProfile(getCurrentToken())
        .then(({data}) => setUserPosts(data.posts))
        }
    }, [])

    useEffect(() => {
        if(getCurrentToken()) {
        userProfile(getCurrentToken())
        .then(({data}) => setCurrentUser(data.username))
        }
    }, [])

       
        console.log(userPosts);
        console.log(messages)


    if(currentUser) {
        return (
            <div className="profile-page">
                <h1>Welcome to your profile, {currentUser}!</h1>
                <div className="profile-posts">
                <h2>Your Posts</h2>
                {userPosts ? userPosts.map((post, index) => <Post key={index} post={post} /> ) : null}
                </div>
                <div className="profile-messages">
                <h2>Messages</h2>
                {messages ? messages.map((message, index) => <Message currentUser={currentUser} key={index} message={message}/>) : null}
                </div>
            </div>
        )
    } else return (
        <div>
            <h1>Please login to see your profile.</h1>
        </div> )
} 
    

export default Profile;