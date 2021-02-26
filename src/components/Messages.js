import React, { useState } from 'react';
import { sendMessage } from '../api'
import { useParams } from 'react-router-dom';


export const Message =  ({ loginToken }) => {
    const [messageContent, setMessageContent] = useState('');
    const { postId } = useParams();

    return (
        <div>
            <form onSubmit={e => {
                e.preventDefault();
                sendMessage({loginToken, messageContent, postId}) 
            }}>
            <h2>Send Message</h2> 
            <input type='text' value={messageContent} onChange={(e) => 
                setMessageContent(e.target.value)} placeholder='Type message here...'></input>
            <input type='submit' />   
            </form>
        </div>
    )

}

export default Message;