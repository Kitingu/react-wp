import React, { useReducer } from 'react';
import axios from 'axios';
import { GET_BLOGS, GET_USER, SET_BLOG, SET_LOADING, SET_USER } from './types';
import BlogReducer from './blogReducer';
import BlogContext from './blogContext';

const BlogState = (props) => {
  const initialState = {
    user: {},
    loading: false,
    blogs: [],
  };

  const [state, dispatch] = useReducer(BlogReducer, initialState);

  const searchBlogs = async () => {
    const res = await axios.get(
      'https://www.blog.justicenetworksea.org/wp-json/wp/v2/posts'
    );
    dispatch({ type: GET_BLOGS, payload: res.data });
  };

  return (
    <BlogContext.Provider
      value={{
        blogs: state.blogs,
        user: state.user,
        searchBlogs,
      }}
    >
      {props.children}
    </BlogContext.Provider>
  );
};

export default BlogState;
