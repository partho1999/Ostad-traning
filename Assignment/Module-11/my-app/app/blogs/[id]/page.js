// import { useRouter } from 'next/router';
import { blogPosts } from '../../../Data/BlogData.json';

const Post = ({params}) => {
    //   const router = useRouter();
    //   const { id } = router.query;
    const id = params.id
    
  
    const post = blogPosts.find((post) => post.id === id);
    console.log(post)

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className='flex justify-center'>

        <div className="card w-100 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">{post.title}</h2>
                <p>{post.content}</p>
                <div className="card-actions justify-end">
                    <p className=''>Date:{post.date}</p>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Post;






