import postList from '@/lib/getPostList';
import Link from 'next/link';
import React from 'react';

const  blog = async () => {

    const posts = await postList();
    console.log(posts)

    return (
        <div className='mx-auto'>
            <div className='grid grid-cols-3 gap-4 mt-8 mb-8'>
                
            {
              posts.map((item, index)=>{
                return(
                    <Link key={index} href={`/blog/${item.id}`}><div  className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                      <img src={item.img} alt="img" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                      <h2 className="card-title">{item.title}</h2>
                      <p>{item.short}</p>
                    </div>
                  </div></Link>
                )
              })
            }
              
            </div>
            
            
        </div>
    );
};

export default blog;