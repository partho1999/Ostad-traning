import Link from 'next/link';
import React from 'react';

const page = () => {
  return (
    <div className='flex flex-col place-items-center'>
      <h1 className='text-center text-4xl mt-20'>Welcome to the Home Page. Please Click on Login</h1>
      <Link href='/login'><button className="btn btn-outline btn-success w-70 mt-8">Login</button></Link>
    </div>
  );
};

export default page;