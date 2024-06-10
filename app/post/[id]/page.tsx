// src/app/posts/[id]/page.tsx
'use client';
import React, { useEffect, useState } from 'react';
import { fetchPostById } from '../../services/postsService';
import { Post } from '../../types/types';
import { useParams } from 'next/navigation';

const PostDetail: React.FC = () => {
  const [post, setPost] = useState<Post | null>(null);
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      const getPost = async () => {
        try {
          const data = await fetchPostById(Number(id));
          setPost(data);
        } catch (error) {
          console.error('Error fetching post:', error);
        }
      };
      getPost();
    }
  }, [id]);

  return (
    <div>
      {post ? (
        <div>
          <h2>{post.title}</h2>
          <p>{post.description}</p>
          <p>Date: {post.views}</p>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default PostDetail;
