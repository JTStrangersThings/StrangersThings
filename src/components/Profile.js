import React from 'react';
import { getCurrentToken } from '../api'

const Profile = ({username}) => {

    console.log(username)

    fetch('https://strangers-things.herokuapp.com/api/2010-UNF-RM-WEB-PT/users/me', {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${getCurrentToken()}`
        },
        }).then(response => response.json())
        .then(result => {
            console.log(result);
        })
        .catch(console.error);

        return (
            <div>
                <h1>Welcome to your profile, {username}!</h1>
            </div>
        )
    }

export default Profile;
