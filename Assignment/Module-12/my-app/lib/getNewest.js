export default async function postNew(){
    const res = await fetch('https://basic-blog.teamrabbil.com/api/post-newest');

    if(!res.status===200){
        throw new Error('Network response was not ok');
    }

    return res.json();
}