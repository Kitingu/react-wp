import React from 'react';
import { GET_USERS,SET_USER_BLOGS, SET_USER } from '../types';

const userReducer = (state, action) => {
  switch (action.type) {
   

    case SET_USER_BLOGS:
      return {
        ...state,
        userBlogs: action.payload,
        loading: false,
      };

    case GET_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case SET_USER:
      return {
        ...state,
        currentUser: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};

export default userReducer;
