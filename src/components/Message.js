import React from 'react';
import { useHistory } from 'react-router-dom';
import { getCurrentToken } from '../api';
import '../components/message.css';

export default function Message (props) {
    const {
        message,
        setPosts,
        currentUser
        // handleEdit = () => {},
        // handleDelete = () => {}
    } = props


    console.log(message);


    const history = useHistory();

    return (
            <div className="message-card">
               <h4 className="message-title">Message from: {message.fromUser.username}<br></br>On post: {message.post.title}</h4>
               <p className="message-content">{message.content}</p>

               {message.fromUser.username === currentUser ?
                <button onClick={() => history.push(`/messages/${message.post._id}`)}>Send Another Message</button> : 
                <button onClick={() => history.push(`/messages/${message.post._id}`)}>Reply</button>
               }
            </div>
    )
}