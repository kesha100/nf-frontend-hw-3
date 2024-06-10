// src/components/AllPosts.tsx
'use client'
import React, { useEffect, useState } from 'react';
import { fetchPosts } from '../services/postsService';
import PostPreview from '../components/PostPreview';
import { Post } from '../types/types';

const AllPosts: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const data = await fetchPosts();
        setPosts(data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };
    getPosts();
  }, []);

  return (
    <div>
      {posts.length > 0 ? (
        posts.map(post => (
          <PostPreview key={post.id} post={post} />
        ))
      ) : (
        <div>No posts available</div>
      )}
    </div>
  );
};

export default AllPosts;
