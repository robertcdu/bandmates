import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

const LogIn = () => {
  const [errors, setErrors] = useState('');
  let history = useHistory();
  const [message, setMessage] = useState('');
  const handleLogIn = (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;
    console.log(username, password);
    // TODO: do some sort of put request with the username and password to start a session.
    // fetch()
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: `${username}`,
        password: `${password}`,
      }),
    };


    fetch('/api/login', options)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // response data is a boolean and userID- redirect to homepage (/users) upone truthry response - response is stored in state
        if (data.loggedIn) {
          history.push('/users');
        } else{
          setMessage(data.message)
        }
      })
      .catch((err) => setErrors(err));
  };



  return (
    <div className='signUpAndLogIn'>
      <div id='signUpContainer'>
        <h1>Bandmates</h1>
        {errors && <div className='loginFields'>{errors}</div>}
        { (message.length) ? (<div className= "error message">Sorry, your username or password is incorrect. Please try again.</div>) : null}
        <form onSubmit={handleLogIn}>
          <input
            className='loginFields'
            type='text'
            id='username'
            name='username'
            placeholder='ian@bbygorl.com'
          />
          <input
            className='loginFields'
            type='password'
            id='password'
            name='password'
            placeholder='SuperSecretPassword'
          />
          <input className='loginFields' type='submit' value='Log In' />
          {/* <button className='loginFields' onClick={handleLogIn}>Log In</button> */}
        </form>
        <Link to='/signUp'>
          <button className='loginFields'>
            Don't have an account? Click here to sign up.
          </button>
        </Link>
      </div>
    </div>
  );
};

export default LogIn;
