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
    <div className='overflow-x-auto whitespace-nowrap py-2'>
      <div className='inline-flex gap-1'>
        {categories.map((category) => (
          <Link
            key={category.name}
            to={`/search?category=${category.query}`}
            className='px-3 py-1 bg-white text-black border border-black rounded-full hover:bg-gray-200'
          >
            {category.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
