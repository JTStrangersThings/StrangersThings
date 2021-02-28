import React from 'react';
import { useHistory } from 'react-router-dom';
import { getCurrentToken } from '../api';

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
        <div className="message-card" >
           <div> 
               <h4>{message.post.title}</h4>
               <p>{message.content}</p>

               {message.fromUser.username === currentUser ?
                <button onClick={() => history.push(`/messages/${message.post._id}`)}>Send Another Message</button> : 
                <button onClick={() => history.push(`/messages/${message.post._id}`)}>Reply</button>
               }

           </div>
        </div>
    )
}