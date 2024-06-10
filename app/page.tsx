'use client'
import React, { useEffect, useState } from 'react';
import { fetchPosts } from './services/postsService';
import PostPreview from './components/PostPreview';
import { Post } from './types/types';

const HomePage: React.FC = () => {
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
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-6">All Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.length > 0 ? (
          posts.map(post => (
            <PostPreview key={post.id} post={post} />
          ))
        ) : (
          <div className="col-span-full text-center">No posts available</div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
