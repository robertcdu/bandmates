import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const LogIn = () => {
  const [errors, setErrors] = useState('');
  const [loggedIn, setloggedIn] = useState(false);
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

    const logInHandler = () => {
      let history = useHistory();
      history.push('/users');
    };

    fetch('/api/users/login', options)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // response data is a boolean and userID- redirect to homepage (/users) upone truthry response - response is strored in state
        if (data[loggedIn]) {
          setloggedIn(true);
          logInHandler();
        }
      })
      .catch((err) => setErrors(err));
  };

  //fucntion to render div
  const handleLoginError = () => {
    return (
      <div>
        <h2>
          Sorry, your username or password is incorrect. Please try again.
        </h2>
      </div>
    );
  };

  return (
    <div className='signUpAndLogIn'>
      <div>{loggedIn ? handleLoginError() : null}</div>
      <div id='signUpContainer'>
        <h1>Bandmates</h1>
        {errors && <div className='loginFields'>{errors}</div>}
        <form onSubmit={handleLogIn}>
          <input
            className='loginFields'
            type='text'
            id='username'
            name='username'
            placeholder='kenny@loggins.com'
          />
          <input
            className='loginFields'
            type='password'
            id='password'
            name='password'
            placeholder='SickPassword420'
          />
          <input className='loginFields' type='submit' value='Log In' />
        </form>
        <Link to='/signUp'>
          <button className='loginFields' onClick={handleLogIn}>
            Don't have an account? Click here to sign up.
          </button>
        </Link>
      </div>
    </div>
  );
};

export default LogIn;
