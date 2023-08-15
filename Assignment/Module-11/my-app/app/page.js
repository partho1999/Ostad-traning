import React from 'react';
// import style from './globals.css'
import Link from 'next/link';

const page = () => {
  return (
    <div className='text-center'>
      <h1 className='text-2xl'>welcome to the home page!</h1>
      <Link className='text-sky-400 underline' href='/blogs'>Go to the Blogs</Link>
    </div>
  );
};

export default page;