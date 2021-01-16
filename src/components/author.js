import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import UserContext from '../context/user/userContext';
import WpApiContent from '../WpApiContent';
import '../styles/author.scss';
const Author = () => {
  const userContext = useContext(UserContext);
  const { currentUser, userBlogs } = userContext;

  return (
    <div className="author-container">
      {currentUser.name ? (
        <div>
          <div className="profile-image">
            <img
              src={userBlogs[0].x_gravatar}
              alt="asdf"
              
            />{' '}
            <p>{currentUser.name}</p>
          </div>
          <p className= "about-author">About the author:</p>
          <p className="author-details">
            <WpApiContent content={currentUser.description} />
          </p>
        </div>
      ) : (
        <Redirect to="/" />
      )}
    </div>
  );
};

export default Author;
