// FeaturedPost.jsx

import React from 'react';
import styles from './blog.module.css';

const FeaturedPost = ({ title, summary, imageUrl }) => {
    return (
      <div className="featuredPostContainer">
        <h2 className="featuredPostTitle">Featured Post</h2>
        <img src={imageUrl} alt="Featured" className="featuredImage" />
        <h3>{title}</h3>
        <p>{summary}</p>
      </div>
    );
  };

export default FeaturedPost;
