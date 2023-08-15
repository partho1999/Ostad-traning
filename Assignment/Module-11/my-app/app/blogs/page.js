import Link from 'next/link';
import { blogPosts } from '../../Data/BlogData.json';

const Blog = () => {
  return (
    <div>
      <h1 className='text-center text-2xl'>Blog Posts</h1>
      <div className='flex justify-center gap-5'>
            {blogPosts.map((post) => (
                <div key={post.id} className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <Link href={`/blogs/${post.id}`}><h2 className="card-title">{post.title}</h2></Link>
                    </div>
                    
                </div>
            ))}
      </div>
    </div>
  );
};

export default Blog;
