'use client'
import Image from 'next/image'
import getCookie from './lib/cookieAPI'


export default function Home() {
  const handeClick = async()=>{
    const cookie = await getCookie();
    alert(`your cookie is set ${cookie}`)
  }
  
  return (
    <div>
      <button onClick={handeClick}>Click here!</button>
    </div>
  )
}
