export default async function FatchCart(){
    const res = await fetch('https://cart-api.teamrabbil.com/api/cart-list', {
        method:"GET",
        headers:{
            "token": localStorage.getItem('token')
        },
    }) ;
    const data = await res.json();


    return data.data
}