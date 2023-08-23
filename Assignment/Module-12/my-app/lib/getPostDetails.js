export default async function postDetails(id){
    const res = await fetch(`https://basic-blog.teamrabbil.com/api/post-details/${id}`);

    if(!res.status===200){
        throw new Error('Network response was not ok');
    }

    return res.json();
}