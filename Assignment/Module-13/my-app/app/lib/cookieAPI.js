export default async function getCookie(){
    const res = await fetch('http://localhost:3000/api/cookie');

    if(!res.status===200){
        throw new Error('Network response was not ok');
    }

    return res.json();
}