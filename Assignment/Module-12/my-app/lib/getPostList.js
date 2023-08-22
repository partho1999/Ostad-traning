export default async function postList(){
    const res = await fetch('https://basic-blog.teamrabbil.com/api/post-list/2');

    if(!res.status===200){
        throw new Error('Network response was not ok');
    }

    return res.json();
}