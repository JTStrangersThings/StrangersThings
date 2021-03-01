import React, { useState } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import { getCurrentToken, storeLoginToken } from '../api';
import '../components/login.css'

const Login = ({username, setUsername, password, setPassword}) => {
  const history = useHistory()

  const loginUser = async (username, password) => {
    const resp = await fetch(
      "https://strangers-things.herokuapp.com/api/2010-UNF-RM-WEB-PT/users/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          user: {
            username,
            password
          }
        })
      }
    );
    return await resp.json();
  };

  const handleClick = (event) => {
      event.preventDefault();
      loginUser(username, password).then((data) => {
        console.log(data);
        const token = data.data.token;
        storeLoginToken(token);

        console.log(token); 
        history.push('/home')
      })
  };

  if(getCurrentToken()) {
    return <Redirect to = '/home' /> }

    return (
    <div className="login-container">
        <form className="login-form" onSubmit={handleClick}>
        <h2>Login here:</h2>
            <label className="login-label">Username</label>
            <input type='text' value={username} placeholder='Username' min='8' max='20' required onChange={(e) => setUsername(e.target.value) }></input>
            <br></br>
            <label className="login-label">Password</label>
            <input type='password' value={password} placeholder='Password' min='8' max='20' required onChange={(e) => setPassword(e.target.value) }></input>
            <div className="login-button">
            <input type='submit' />
            </div>
        </form>
        <a href='/register'>Don't have an account? Sign up</a>
    </div>
    )
}

export default Login;