export default async function VerifyLogin(email, pin){
    const res = await fetch('https://cart-api.teamrabbil.com/api/verify-login',{
        method:"POST",
        headers:{
            "content-type": "application/json"
        },
        body: JSON.stringify({
            UserEmail: email,
            OTP: pin,
        })
    }) ;
    const data = await res.json();


    return data;
}