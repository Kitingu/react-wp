import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import UserContext from '../context/user/userContext';
import WpApiContent from '../WpApiContent';

const Author = () => {
  const userContext = useContext(UserContext);
  const { currentUser, userBlogs } = userContext;

  return (
    <div className="author-container">
      {currentUser.name ? (
        <div>
          <p>{currentUser.name}</p>
          <p>
            <WpApiContent content={currentUser.description} />
          </p>
          <p>{userBlogs.length}</p>
          <img
            src={userBlogs[0].x_gravatar}
            alt="asdf"
            style={{
              borderRadius: '50%',
            }}
          />{' '}
        </div>
      ) : (
        <Redirect to="/" />
      )}
    </div>
  );
};

export default Author;
