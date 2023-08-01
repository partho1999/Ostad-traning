export default async function UserLogin(email){
    const res = await fetch('https://cart-api.teamrabbil.com/api/user-login',{
        method:"POST",
        headers:{
            "content-type": "application/json"
        },
        body: JSON.stringify({
            UserEmail: email,
        })
    }) ;
    const data = await res.json();


    return data;
}