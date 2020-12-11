import { GET_BLOGS, GET_USER, SET_BLOG, SET_LOADING, SET_USER } from './types';

import React from 'react'

const blogReducer = (state,action) => {
    switch (action.type) {
      case SET_LOADING:
        return {
          ...state,
          loading: true,
        };

      case GET_BLOGS:
        return {
          ...state,
          blogs: action.payload,
          loading:false
        };

      case GET_USER:
        return {
          ...state,
          user: action.payload,
          loading: false,
        };

      default:
        return state;
    }
}

export default blogReducer