import React, { useReducer } from 'react';
import axios from 'axios';
import { GET_USERS, SET_USER_BLOGS, SET_USER } from '../types';
import UserContext from './userContext';
import UserReducer from './userReducer';

const UserState = (props) => {
  const initialState = {
    user: {},
    users: [],
    userBlogs: [],
    currentUser: {},
  };

  const [state, dispatch] = useReducer(UserReducer, initialState);

  const searchUsers = async () => {
    const res = await axios.get(
      'https://www.blog.justicenetworksea.org/wp-json/wp/v2/users'
    );
    dispatch({ type: GET_USERS, payload: res.data });
  };
  const setUser = async (data) => {
    dispatch({ type: SET_USER, payload: data });
  };
  const setUserBlogs = (user,blogs)=>{
      const userblogs= blogs.filter(blog => user.id === blog.author )
      dispatch({type:SET_USER_BLOGS, payload: userblogs})
  }

  return (
    <UserContext.Provider
      value={{
        user: state.user,
        users:state.users,
        searchUsers,
        currentUser: state.currentUser,
        setUser,
        userBlogs:state.userBlogs,
        setUserBlogs
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserState;
