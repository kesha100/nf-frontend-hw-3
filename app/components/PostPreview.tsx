// src/components/PostPreview.tsx
import React from 'react';
import Link from 'next/link';
import { Post } from '../types/types';

interface PostPreviewProps {
  post: Post;
}

const PostPreview: React.FC<PostPreviewProps> = ({ post }) => {
  return (
    <div className="bg-white p-6 mb-4 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-2">
        <Link href={`/posts/${post.id}`}>{post.title}</Link>
      </h2>
      <p className="text-gray-700">{post.description}...</p>
      <p className="text-gray-700">{post.views}...</p>
      <p className="mt-4">
        <Link href={`/posts/${post.id}`} className="text-blue-500 hover:underline">Read More</Link>
      </p>
    </div>
  );
};

export default PostPreview;
