import React from 'react';
import { getCurrentToken } from '../api'
const Profile = () => {
    fetch('https://strangers-things.herokuapp.com/api/2010-UNF-RM-WEB-PT/users/me', {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${getCurrentToken()}`
        },
        }).then(response => response.json())
        .then(result => {
            console.log(result);
            const messages = result.data.messages;
            const userPosts = result.data.posts;
            const username = result.data.username;
            console.log(messages)
            console.log(userPosts)
            console.log(username);
        })
        .catch(console.error);
        return (
            <div>
                <h1>Welcome to your profile, !</h1>
            </div>
        )
    }
export default Profile;