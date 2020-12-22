import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Iframe from 'react-iframe';
import BlogContext from '../context/blog/blogContext';
import { HomeSlider } from './slider/slider';
import UserContext from '../context/user/userContext';


export const Blogs = () => {
  const blogContext = useContext(BlogContext);
  let { blogs, searchBlogs, setBlog } = blogContext;

  const userContext = useContext(UserContext);
  const {

    setUserBlogs,
    setUser,
    users,
    searchUsers,
  } = userContext;

  const fetchBlogs = async () => {
    await searchBlogs();
  };
  useEffect(() => {
    fetchBlogs();
    searchUsers();
  }, []);
  console.log(users);
  return (
    <div>
      <HomeSlider />
      {/* <div>
        <Iframe
          url="https://drive.google.com/file/d/1pYNKeo8pQ_BzbxCNNFo1km4KZl2wxJ-u/preview"
          width="100%"
          height="480"
          className="iframe-video"
          frameBorder="0"
        ></Iframe>
      </div> */}
      {blogs && (
        <div className="blog-container">
          {blogs.map((post) => {
            const featuredImage = post.better_featured_image
              ? post.better_featured_image.source_url
              : `https://via.placeholder.com/450`;

            return (
              <div key={post.id} className="blog-list">
                <div className="blog-post">
                  <img
                    className="blog-list-img"
                    src={featuredImage}
                    alt="featured_image"
                  />
                  <h3 className={`category ${post.x_categories}`}>
                    {post.x_categories}
                  </h3>

                  <p>
                    {' '}
                    <Link
                      className="blogpost-title"
                      to={`/${post.id}`}
                      onClick={() => {
                        const data = blogs.filter(
                          (blog) => blog.id === post.id
                        );
                        setBlog(data[0]);
                      }}
                    >
                      {post.title.rendered}{' '}
                    </Link>
                  </p>

                  <p>
                    {new Date(post.date).toLocaleString('en-GB', {
                      day: 'numeric',
                      month: 'short',
                      year: 'numeric',
                    })}{' '}
                    |{' '}
                    <Link
                      className="author"
                      to={`/author/${post.author}`}
                      onClick={() => {
                        const user = users.filter(
                          (data) => data.id === post.author
                        );

                        setUser(user[0]);
                        setUserBlogs(user[0], blogs);
                      }}
                    >
                      {post.x_author}
                    </Link>
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
