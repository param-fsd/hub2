// src/components/Categories.js
import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
  { name: 'Technology', query: 'Technology' },
  { name: 'Sports', query: 'Sports' },
  { name: 'Gadgets', query: 'Gadgets' },
  { name: 'Political', query: 'Political' },
  { name: 'Health', query: 'Health' },
  { name: 'Fashion', query: 'Fashion' },
  { name: 'Education', query: 'Education' },
];

const Categories = () => {
  return (
    <div className='flex flex-wrap gap-4 justify-center'>
      {categories.map((category) => (
        <Link
          key={category.name}
          to={`/search?category=${category.query}`}
          className='px-4 py-2 bg-gray-600 text-white rounded-full hover:bg-gray-700'
        >
          {category.name}
        </Link>
      ))}
    </div>
  );
};

export default Categories;
