import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import NavBar from '../NavBar/NavBar';

const User = () => {
  const [user, setUser] = useState(null);
  
  // TODO: there's probably a better way to get a user's ID from ReactRouterDom.
  const history = useHistory();
  const userId = history.location.pathname.split('/users/')[1];
  // TODO: in the future, user information should be fetched from 
  // backend via a get request to /api/users/:id
  useEffect(() => {
    console.log("id", userId)
    fetch(`/api/users/${userId}`)
    .then(res => res.json())
    .then(data => {
        setUser(data);
      })
      .catch(err => console.log(err));
  }, []);

  console.log('user', user) //!

  if (!user) {
    return (
      <>
        <NavBar />
        <div>
          Loading user...
        </div>
      </>
    )
  }

  const {
    name,
    username,
    email,
    instruments,
    genres,
    gender,
    birthdate,
    location,
    bio,
    skill_level: skillLevel,
  } = user.user;
  
  // TODO: use birthdate to format age.
  const formattedBirthdate = birthdate.slice(0,4);
  const today = new Date().getFullYear()
  console.log(today)
  const age = today - formattedBirthdate;
  // console.log(Date(formattedBirthdate))
  

  console.log(today)
  
  // TODO: format genres and instruments from arrays to strings
  // (once the backend is serving up arrays)
  const formattedInstruments = instruments;
  const formattedGenres = genres;

  return (
    <div>
      <NavBar />
      <div className="userProfileBox">
        <div><h1>{name}</h1></div>
        <div className="profileBio">{bio}</div>
        {/* <div>{formattedInstruments}</div>
        <div>{formattedGenres}</div> */}
        <div>{skillLevel}</div>
        <div >Age: {age}</div>
        <div>{email}</div>
      </div>
    </div>
  )
};

export default User;
