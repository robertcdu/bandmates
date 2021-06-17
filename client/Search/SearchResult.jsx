import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
/*

The SearchResult component receives its props from the 
Search component. In the Search component, the user's 
values are spread (...) into SearchResults. 
skill_level is renamed as skillLevel to comply with
JavaScript naming conventions. 
The state isBioShowing is used to indicate whether or
not additional information about a user (bio, email)
should be shown. 

FUTURE IMPLEMENTATIONS:
- rather than display all the information about the user
in the search result, a future implementation should
provide a Link (via React Router) to /users/:id. 

*/

const SearchResult = ({
  _id,
  name,
  location,
  instruments,
  skill_level: skillLevel,
  genres,
  bio,
  email,
  gender,
}) => {
  const [isBioShowing, setIsBioShowing] = useState(false);
  const toggleBio = () => setIsBioShowing(!isBioShowing);
  const formattedInstruments = instruments.join(", ");
  const formattedGenres = genres.join(", ");

  // const history = useHistory();
  // const userId = history.location.pathname.split('/users/')[1];

  return (
    <div className="searchResult">
      <div className="searchResultName">{name}</div>
      {/* <div>Location: {location}</div> */}
      <div>Skill level: {skillLevel}</div>
      <div>Instruments: {formattedInstruments}</div>
      <div>Genres: {formattedGenres}</div>
      <div>Gender: {gender}</div>
      {isBioShowing && (
        <>
          <div>
            {bio}
          </div>
          <div>
            Contact: {email}
          </div>
        </>
      )}
      <button onClick={toggleBio}>
        {isBioShowing ? 'Show less information' : 'Show more information'}
      </button><br/>
      <button className="goToProfileButton"><Link className="goToProfileLink" to={`/users/${_id}`}>Go to profile</Link></button>
    </div>
  )
};

export default SearchResult;
