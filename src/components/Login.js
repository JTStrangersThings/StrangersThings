import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { storeLoginToken } from '../api';

const Login = ({username, setUsername, password, setPassword, loginToken, setLoginToken}) => {


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
    setLoginToken(token);
    storeLoginToken(token);

    console.log(token); 

  })};

  if(loginToken) {
    return <Redirect to = '/home' /> }


    return (
    <div>
        <form onSubmit={handleClick}>
        <h2>Login here:</h2>
            <label>Username</label>
            <input type='text' value={username} placeholder='Username' min='8' max='20' required onChange={(e) => setUsername(e.target.value) }></input>
            <label>Password</label>
            <input type='password' value={password} placeholder='Password' min='8' max='20' required onChange={(e) => setPassword(e.target.value) }></input>
            <button type='submit'>Log In</button>
        </form>
        <a href='/register'>Don't have an account? Sign up</a>
    </div>
    )
}

export default Login;