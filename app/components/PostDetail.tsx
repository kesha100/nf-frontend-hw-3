// src/components/PostDetail.tsx
import React from 'react';
import { Post } from '../types/types';

interface PostDetailProps {
  post: Post;
}

const PostDetail: React.FC<PostDetailProps> = ({ post }) => {
  return (
    <div className="bg-white p-6 mb-4 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-700">{post.description}</p>
      <p className="text-gray-500 mt-4">Author: {post.views}</p>
    </div>
  );
};

export default PostDetail;
