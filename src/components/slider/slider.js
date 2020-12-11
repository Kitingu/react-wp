import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import image1 from '../../images/image001.jpg'
import image2 from '../../images/image002.jpg'
import image3 from '../../images/image003.jpg';

export const HomeSlider = () => (
  <Carousel autoPlay>
    <div>
      <img alt="" src={image1} />
      <p className="legend">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor eligendi
        inventore similique natus consectetur quam non at excepturi voluptas
        illo velit commodi, aliquam libero in dolores iste fugit adipisci ullam?
      </p>
    </div>
    <div>
      <img alt="" src={image2} />
      <p className="legend">Legend 2</p>
    </div>
    <div>
      <img alt="" src={image3} />
      <p className="legend">Legend 3</p>
    </div>
  </Carousel>
);
