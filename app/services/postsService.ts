import api from './api';
import { Post } from '../types/types';

export const fetchPosts = async (): Promise<Post[]> => {
    try {
      const response = await api.get('/');
      if (response.status === 200) {
        const { data } = response;
        if (Array.isArray(data.posts)) {
          return data.posts as Post[];
        } else {
          throw new Error('Posts data is not in the expected format');
        }
      } else {
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }
    } catch (error) {
      console.error('Error fetching posts:', error);
      throw error;
    }
  };

  export const fetchPostById = async (postId: number): Promise<Post> => {
    try {
      const response = await api.get(`/${postId}`);
      if (response.status === 200) {
        return response.data as Post;
      } else {
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }
    } catch (error) {
      console.error('Error fetching post by ID:', error);
      throw error;
    }
  };
  