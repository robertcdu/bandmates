import React from 'react';
import { Link } from 'react-router-dom';

// TODO: in the future, the NavBar should have
// information about the current user, and uses that
// to Link the user to their profile. This will be 
// accomplished with Redux and Auth. 
const NavBar = () => (
  <div className="usersPageLinks">
    {/* <div>
      Hello, {username}!
    </div> */}
    {/* <div>
      <Link to={`/users/${id}`}>View profile</Link>
    </div> */}

    <Link to="/users" className="redirect"><strong>Search Musicians</strong></Link>

    {/* TODO: clicking "Log out" should actually log a user out,
      not just redirect them to the logIn page.  */}
    <Link to="/logIn" className="redirect"><strong>Log out</strong></Link>

  </div>
);

export default NavBar;
