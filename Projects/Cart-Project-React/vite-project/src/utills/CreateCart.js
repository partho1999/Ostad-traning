export default async function CreateCart(id){
    const res = await fetch(`https://cart-api.teamrabbil.com/api/create-cart/${id}`,{
        method:"GET",

        headers:{
            token: localStorage.getItem('token'),
        } 
    }) ;
    const data = await res.json();


    return data  
}