import React from 'react';
import ReactDOM from 'react-dom';
import { useState } from 'react';
import styled from 'styled-components';
import '../src/style.css';

import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    Switch
} from 'react-router-dom';

import {
    Title,
    Register,
    Login,
    Profile,
    Posts,
    CreatePostForm,
    Messages,
    EditPostForm
} from './components';
import { clearCurrentToken } from './api';

const App = () => {

    const [username, setUsername] = useState('');
    const [post, setPost] = useState('');
    const [password, setPassword] = useState('');
    const [confirmedPassword, setConfirmedPassword] = useState('');
    const [registerToken, setRegisterToken] = useState('');
    const [loginToken, setLoginToken] = useState('');
    const [postId, setPostId] = useState('');
    const [postTitle, setPostTitle] = useState('');
    const [postDescription, setPostDescription] = useState('');
    const [postPrice, setPostPrice] = useState('');
    const [postLocation, setPostLocation] = useState('');
    const [willDeliver, setWillDeliver] = useState(false);
    const [posts, setPosts] = useState([]);

/* nope, you just need to clear your token - you're still logged in as jumbo */

    return (
        <Router>

        <div className="app">
            <header className="fixedheader">
                <h1>Stranger's Things</h1>
                <nav>
                    <Link to='/home'>Home</Link>
                    <Link to='/posts'>Posts</Link>
                    <Link to='/profile'>Profile</Link>
                    <Link to='/login'>Login</Link>
                    <Link to='/register'>Register</Link>
                    <Link to='/' onClick={() => clearCurrentToken()}>Logout</Link>
                </nav>
            </header>
            <div className="headerspacer"></div>
            <main>
            <Switch>

                <Route exact path='/home'>
                    <Title />
                    <h1 className="homepage">Welcome to Stranger's Things!</h1>
                    <h2 className="homepage">Click the links above to navigate.</h2>
                </Route>

                <Route exact path='/'>
                    <Title />
                    <Login username={username} password={password} setUsername={setUsername} setPassword={setPassword}
                    loginToken={loginToken} setLoginToken={setLoginToken}/>
                </Route>

                <Route exact path='/posts'>
                    <Posts posts={posts} setPosts={setPosts} setPost={setPost} post={post} loginToken={loginToken} />
                </Route>

                <Route exact path='/createpost'>
                    <CreatePostForm loginToken={loginToken} postId={postId} setPostId={setPostId} postTitle={postTitle}
                    setPostTitle={setPostTitle} postDescription={postDescription} setPostDescription={setPostDescription}
                    postPrice={postPrice} setPostPrice={setPostPrice} postLocation={postLocation}
                    setPostLocation={setPostLocation} willDeliver={willDeliver} setWillDeliver={setWillDeliver}/>
                </Route>

                <Route exact path='/profile'>
                    <Profile />
                </Route>

                <Route exact path='/register'>
                    <Title />
                    <Register username={username} password={password} confirmedPassword={confirmedPassword} 
                    registerToken={registerToken} setUsername={setUsername} setPassword={setPassword} 
                    setConfirmedPassword={setConfirmedPassword} setRegisterToken={setRegisterToken}/>
                </Route>

                <Route exact path="/messages/:postId" >
                    <Messages loginToken={loginToken} />
                    {/*Figure out how to get query parameter OR when navigating to this page set state before*/ }
                </Route>

                <Route exact path='/editpost/:postId'>
                    <EditPostForm post={post} setPost={setPost} loginToken={loginToken} postId={postId} setPostId={setPostId} postTitle={postTitle}
                    setPostTitle={setPostTitle} postDescription={postDescription} setPostDescription={setPostDescription}
                    postPrice={postPrice} setPostPrice={setPostPrice} postLocation={postLocation}
                    setPostLocation={setPostLocation} willDeliver={willDeliver} setWillDeliver={setWillDeliver}/>
                </Route>

            </Switch>
            </main>
    </div>
    </Router>
    )
}


ReactDOM.render(
    <Router>
         <App />
    </Router>,
    document.getElementById('app'),
  )