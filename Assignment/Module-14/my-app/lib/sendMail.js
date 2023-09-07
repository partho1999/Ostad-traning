export default async function sendMail(mail){
    const res = await fetch(`/api/email?email=${mail}`);

    if(!res.status===200){
        throw new Error('Network response was not ok');
    }

    return res.json();

}

