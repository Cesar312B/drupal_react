import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BlogPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('http://localhost/drupal/node/{1}');
        setPosts(response.data); // Cambiar de response.data.data a response.data
      } catch (error) {
        console.error(error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <h3>Blogs</h3>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h3>{post.attributes.title}</h3>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogPosts;