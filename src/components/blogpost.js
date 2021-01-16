import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import '../styles/blogpost.scss';
import BlogContext from '../context/blog/blogContext';
import WpApiContent from '../WpApiContent';

export const Blogpost = () => {
  const blogContext = useContext(BlogContext);
  const { currentBlog } = blogContext;
  return (
    <div className="blogpost">
      {currentBlog.content ? (
        <div>
          <p className="blog-title">{currentBlog.title.rendered}</p>
          <p className="blogpost-author">{currentBlog.x_author}</p>
          <WpApiContent content={currentBlog.content.rendered} />
        </div>
      ) : (
        <Redirect to="/" />
      )}
    </div>
  );
};
