import React from 'react';
import WpApiContent from '../WpApiContent';

export const Blogpost = (blog) => {
  return (
    <div>
      <WpApiContent>{blog}</WpApiContent>
    </div>
  );
};
