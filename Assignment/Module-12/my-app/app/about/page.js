import postCategories from '@/lib/getPostCategories';
import React from 'react';

const about =async () => {

    const categories = await postCategories();

    return (
        <div>
            <div className='my-8'>
                <h1 className='text-center text-4xl'>About Us</h1>
                <h1 className='text-6xl px-20 mx-8 mt-20'>We inform, help and support the creative community</h1>
                <h2 className='px-20 text-2xl mt-8'>The Creative80 Room is the U.K. based Creative Blog website, launched in 2016, Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor</h2>
                <p className='px-20 mt-8'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo</p>
            </div>
            <div>
                <h1 className='text-center text-4xl'>Our Blogs Categories</h1>
                    
                            <div className='flex flex-row justify-center gap-5 my-8'>
                                {
                                    categories.map((item, index)=>{
                                     return(    
                                        <div className="badge badge-outline w-30 h-10">{item.name}</div>
                                        )
                                    })
                                }
                                
                            </div>
                    
           
            </div>
        </div>
    );
};

export default about;