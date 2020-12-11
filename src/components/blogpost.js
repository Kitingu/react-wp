import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import BlogContext from '../context/blog/blogContext';
import WpApiContent from '../WpApiContent';


export const Blogpost = () => {
  const blogContext = useContext(BlogContext);
  const { currentBlog } = blogContext;
  return (
    <div className="blogpost">
     
      {currentBlog.content ? (
        <WpApiContent content={currentBlog.content.rendered} />
      ) : (
        <Redirect to="/" />
      )}
    </div>
  );
};
