export default async function postCategories(){
    const res = await fetch('https://basic-blog.teamrabbil.com/api/post-categories');

    if(!res.status===200){
        throw new Error('Network response was not ok');
    }

    return res.json();
}