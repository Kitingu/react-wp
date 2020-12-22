import React, { useContext } from 'react';
import UserContext from '../context/user/userContext';
import WpApiContent from '../WpApiContent';

const Author = () => {
  const userContext = useContext(UserContext);
  const { currentUser,userBlogs } = userContext;
  const avatar = userBlogs[0].x_gravatar
  return (
    <div>
      <p>{currentUser.name}</p>
      <p>
        <WpApiContent content={currentUser.description} />
      </p>
  <p>{userBlogs.length}</p>
      <img src={avatar} alt="asdf" style={{
          borderRadius:'50%'
      }}/>
    </div>
  );
};      

export default Author;
