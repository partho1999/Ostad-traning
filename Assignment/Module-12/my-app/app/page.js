import postNew from '@/lib/getNewest'
import postCategories from '@/lib/getPostCategories'
import postList from '@/lib/getPostList'
import Image from 'next/image'
import Link from 'next/link'

export default async function Home() {

  const posts = await postList()
  // console.log(posts)
  const newPosts = await postNew()
  // console.log(newPosts)
  const categories = await postCategories()
  // console.log(categories)

  return (
    <div>
      <div className='grid grid-cols-4 gap-4 mt-8 mb-8'>
        
        <div class="col-span-3 mx-auto">
          <div className='grid grid-cols-2 gap-4'>
            {
              posts.map((item, index)=>{
                if(index<5){
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
                }
              })
            }
            
          </div>
        </div>
       
        <div className='mx-auto'>
          <div class="grid grid-rows-2 grid-flow-col gap-4">
            <div>
              <h1>Newest</h1>
              <hr/>
              {
                newPosts.map((item ,index)=>{
                  if(index<4){
                    return(
                      <Link key={index} href={`/blog/${item.id}`}><div className="card w-80 bg-base-100 shadow-xl mt-4 mb-4">
                        
                        <h2 className="card-title">{item.title}</h2>
                        
                      </div></Link>
                    )
                  }
                  
                })
              }
              
            </div>
           
            <div>
              
              <h1>Categories</h1>
              <hr/>
              {
                categories.map((item)=>{
                  return(
                    <div className="card w-80 bg-base-100 shadow-xl mt-4 mb-4">
                      
                      <h2 className="card-title">{item.name}</h2>
                     
                    </div>
                  )
                })
              }
              
              
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
