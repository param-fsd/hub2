import { Link } from 'react-router-dom';
import CallToAction from '../components/CallToAction';
import { useEffect, useState } from 'react';
import PostCard from '../components/PostCard';
import Categories from '../components/Categery';

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch('/api/post/getPosts');
      const data = await res.json();
      setPosts(data.posts);
    };
    fetchPosts();
  }, []);

  return (
    <div className='bg-gray-50 dark:bg-gray-900 min-h-screen'>
      <div className='flex flex-col gap-8 p-10 lg:p-20 px-6 max-w-7xl mx-auto'>
      <Categories />
        <h1 className='text-4xl font-bold lg:text-5xl text-gray-800 dark:text-white'>
          Welcome to JD News Hub.
        </h1>
        <p className='text-gray-600 dark:text-gray-300 text-base lg:text-lg'>
          Stay updated with the latest in tech, sports, fashion, politics, and more. 
          Discover in-depth articles and breaking news on the topics that matter to you. 
          Join our community of readers and stay informed.
        </p>
        <Link
          to='/search'
          className='text-base lg:text-lg text-blue-500 font-semibold hover:underline'
        >
          View all posts
        </Link>
      </div>

      <div className='p-4 bg-green-100 dark:bg-green-800'>
        <CallToAction />
      </div>

      <div className='max-w-7xl mx-auto p-6 flex flex-col gap-10 py-10'>
        {posts && posts.length > 0 && (
          <div className='flex flex-col gap-8'>
            <h2 className='text-3xl font-semibold text-center text-gray-800 dark:text-white'>
              Recent Posts
            </h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
              {posts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
            <Link
              to={'/search'}
              className='text-xl text-blue-500 hover:underline text-center'
            >
              View all posts
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
