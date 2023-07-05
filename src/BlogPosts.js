import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BlogPosts = () => {
  const [content, setContent] = useState({});

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const node = 1; // Reemplaza con el ID numérico del nodo que deseas obtener
        const response = await axios.get(`http://localhost/drupal/node/${node}?_format=json`);
        console.log(response.data); 
        setContent(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchContent();
  }, []);

  return (
    <div>
      <h2>Content List</h2>
      <ul>
        <li>
          {content.title && (
            <p>{content.title[0].value}</p>
          )}
          {content.body && (
            <p>{content.body[0].processed}</p>
          )}
        </li>
      </ul>
    </div>
  );
};

export default BlogPosts;
