"use client";

import React, { useState } from 'react';
import Modal from './Modal';
import styles from './blog.module.css';
import QuillEditor from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import FeaturedPost from './featuredPost';


const Blogpage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null); // State to hold the uploaded image
  const [blogs, setBlogs] = useState([]);

  const handleTitleChange = (e) => setTitle(e.target.value);
  const handleDescriptionChange = (e) => setDescription(e.target.value);
  const handleImageChange = (e) => setImage(e.target.files[0]); // Update image state when a file is selected
  const handleEditorChange = (content) => setContent(content);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description || !image) {
      alert("Please fill out all fields and upload an image before submitting.");
      return;
    }
    const newBlog = { title, description, image };
    setBlogs([...blogs, newBlog]);
    setTitle('');
    setDescription('');
    setImage(null);
    setIsModalOpen(false);
  };

  return (
    <div className={styles.blogPageContainer}>
      <button onClick={() => setIsModalOpen(true)} className={styles.addBlogButton}>
        + Add Blog
      </button>

      <div className={styles.container}> {/* Container for featured post and previous stories */}
        {/* Render FeaturedPost if blogs array is not empty */}
        {blogs.length > 0 && (
          <FeaturedPost
            title={blogs[0].title}
            imageUrl={blogs[0].image ? URL.createObjectURL(blogs[0].image) : null}
            postId={blogs[0].id} // Assuming each blog has a unique identifier
          />
        )}

<div className={styles.previousStories}>
          <h2> Previous Stories </h2>
          {/* Map through the blogs array to display previous stories */}
          {blogs.map((blog, index) => (
            // Only render non-featured blogs
            index !== 0 && (
              <div key={blog.id} className={styles.blogPost}> {/* Assuming each blog has a unique identifier */}
                <h3> {blog.title} </h3>
                {blog.image && <img src={URL.createObjectURL(blog.image)} alt="Blog Post" className={styles.blogPostImage} />}
                {/* Additional content can go here */}
              </div>
            )
          ))}
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <form onSubmit={handleSubmit} className={styles.blogForm}>
          <div className={styles.formRow}>
            <div className={styles.titleField}>
              <label htmlFor="title">Title</label>
              <input id="title" className={styles.inputField} value={title} onChange={handleTitleChange} />
            </div>
            <div className={styles.descriptionField}>
              <label htmlFor="description">Description</label>
              <textarea id="description" className={styles.textAreaField} value={description} onChange={handleDescriptionChange} />
            </div>
          </div>
          <div className={styles.formRow}>
            <label htmlFor="image">Image</label>
            <input type="file" id="image" accept="image/*" onChange={handleImageChange} />
          </div>
          <button type="submit" className={styles.createBlogButton}>Create Blog Post</button>
        </form>
      </Modal>
    </div>
  );
};

export default Blogpage;