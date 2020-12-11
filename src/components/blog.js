import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';


export const Blogs = () => {
  const [posts, setPosts] = useState(null);
  useEffect(() => {
    Axios.get(
      'https://www.blog.justicenetworksea.org/wp-json/wp/v2/posts'
    ).then((response) => {
      setPosts(response.data);
    });
  }, [setPosts]);
  console.log(posts);
  return (
    <div>
      {posts && (
        <div className="container">
          {posts.map((post) => {
            const featuredImage = post.better_featured_image
              ? post.better_featured_image.source_url
              : `https://via.placeholder.com/450`;

            return (
              <div className="blog-list">
                <div className="blog-post">
                  <img
                    className="blog-list-img"
                    src={featuredImage}
                    alt="featured_image"
                  />
                  <h3 className={`category ${post.x_categories}`}>
                    {post.x_categories}
                  </h3>
                  <p><Link
					to={`/${post.id}`}
					className='btn btn-dark btn-sm my-1'
				>{post.title.rendered} </Link> </p>
                  <p>
                    {new Date(post.date).toLocaleString('en-GB', {
                      day: 'numeric',
                      month: 'short',
                      year: 'numeric',
                    })}{' '}
                    | {post.x_author}
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
