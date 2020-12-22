import React, {  useReducer } from 'react';
import axios from 'axios';
import { GET_BLOGS, SET_BLOG } from '../types';
import BlogReducer from './blogReducer';
import BlogContext from './blogContext';

const BlogState = (props) => {
  const initialState = {
    loading: false,
    blogs: [],
    currentBlog:{}
  };

  const [state, dispatch] = useReducer(BlogReducer, initialState);

  const searchBlogs = async () => {
    const res = await axios.get(
      'https://www.blog.justicenetworksea.org/wp-json/wp/v2/posts'
    );
    dispatch({ type: GET_BLOGS, payload: res.data });
  };
  const setBlog = async (data) =>{
      dispatch({ type: SET_BLOG, payload: data });
  }

  return (
    <BlogContext.Provider
      value={{
        blogs: state.blogs,
        user: state.user,
        searchBlogs,
        currentBlog:state.currentBlog,
        setBlog
      }}
    >
      {props.children}
    </BlogContext.Provider>
  );
};

export default BlogState;
