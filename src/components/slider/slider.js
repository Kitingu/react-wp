import React, { useContext, useEffect } from 'react';
import Swiper from 'react-id-swiper';

import 'swiper/css/swiper.css';
import '../../styles/styles.scss';

// import 'swiper/components/navigation/navigation.scss';
import image1 from '../../images/image001.jpg';
import image2 from '../../images/image002.jpg';
import image3 from '../../images/image003.jpg';
import BlogContext from '../../context/blog/blogContext';
import WpApiContent from '../../WpApiContent';

const params = {
  navigation: {
    nextEl: '.swiper-btn-next',
    prevEl: '.swiper-btn-prev',
  },
  // pagination: {
  //   el: '.swiper-pagination',
  //   type: 'bullets',
  //   clickable: true,
  // },
  effect: 'cube',
  // autoplay: {
  //   delay: 6000,
  //   disableOnInteraction: false,
  // },
  spaceBetween: 30,
};
export const HomeSlider = () => {
  const blogContext = useContext(BlogContext);
  const { blogs,searchBlogs } = blogContext;
  

  // useEffect(() => {
  //  const getBlogs = async()=>{
  //   searchBlogs()
  //  }
  //  getBlogs()
  // }, []);
  return (
    <Swiper containerClass="blog-slider" {...params}>
      {blogs.map((post) => {
        const featuredImage = post.x_featured_media
          ? post.x_featured_media_original
          : `https://via.placeholder.com/450`;
        return (
          // <img src={image1} alt=""/>
          <div
            className="slider-content-container"
            style={{
              backgroundImage: `url(${featuredImage})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <div className="slider-content-div">
              <div className="slider-excerpt">
                <img
                  className="gravatar"
                  src={post.x_gravatar}
                  alt="author-avatar"
                />
                <div className="excerpt">
                  <h3>{post.title.rendered}</h3>
                  <p>
                    {
                      `${post.excerpt.rendered}`
                        .replace(/<[^>]*>/g, '')
                        .split('.')[0]
                    }
                  </p>
                </div>
              </div>
              <div className="slider-category">
                <p className="category-name">{post.x_categories}</p>
                <p>
                  {new Date(post.date).toLocaleString('en-GB', {
                    day: 'numeric',
                    month: 'short',
                    year: 'numeric',
                  })}{' '}
                  | <span> {post.x_author}</span>
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </Swiper>
    
  );
};
