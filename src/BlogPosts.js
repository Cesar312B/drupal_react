import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import DOMPurify from 'dompurify';

const BlogPosts = () => {
    const [content, setContent] = useState({});
    const contentRef = useRef(null);

    useEffect(() => {
        const fetchContent = async () => {
          try {
            const node = 1;
            const response = await axios.get(`http://localhost/drupal/node/${node}?_format=json`);
            console.log(response.data); 
            setContent(response.data);
          } catch (error) {
            console.error(error);
          }
        };
    
        fetchContent();
      }, []);
    
      useEffect(() => {
        if (content.body && contentRef.current) {
          const sanitizedHTML = DOMPurify.sanitize(content.body[0].processed);
          contentRef.current.innerHTML = sanitizedHTML;
        }
      }, [content]);


      return (
        <div>
          <h2>Post</h2>
          <ul>
            <li>
              {content.title && (
                <p>{content.title[0].value}</p>
              )}
              <div ref={contentRef}></div>
            </li>
          </ul>
        </div>
      );
    };

export default BlogPosts;
