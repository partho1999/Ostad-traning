import postDetails from '@/lib/getPostDetails';
import React from 'react';

const singlePost = async ({params}) => {

    const id =params.id
   
    const post = await postDetails(id)
    console.log(post)

    if(post.postDetails!==null){
        return (
            <div className='px-8'>
                <div className="card w-100 bg-base-100 shadow-xl mx-auto my-8">
                    <figure className="px-10 pt-10">
                        <img src={post.postDetails.img} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center">
                        <h2 className="card-title">{post.postDetails.title}</h2>
                        <p>{post.postDetails.content}</p>
                    </div>
                </div>
                <p></p>
            </div>
        );
    }
   
};

export default singlePost;