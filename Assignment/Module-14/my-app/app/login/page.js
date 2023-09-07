"use client"
import sendMail from '@/lib/sendMail';
import { useRouter } from 'next/navigation';

import React, { useState } from 'react';



const login = () => {

    const router=  useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [msg, setMsg] = useState('');

    const data={
        email:email,
        password:password
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!email || !password) {
            setMsg('All fields are required');
            return;
        }
        // console.log(typeof(email))
        setMsg('Email Sending..')
        const mail = await sendMail(email);
        setMsg('Email Send..!')
        // setTimeout(function(){
        //     setMsg('')
        // }, 2000);
        // console.log(mail)
        const config= {method: "POST", body: JSON.stringify(data)};
        const response = await fetch('/api/login', config);
        const json = await response.json();


        if(json['status']===true){
            router.replace('/dashboard')
        }
        else{
            alert(json['message'])
        }
    }


    return (
        <div>
            <h1 className='text-center text-4xl mt-8'>Login</h1>
            <div className="card card-compact w-96 bg-base-100 shadow-xl mx-auto mt-20">
                <form onSubmit={handleSubmit}>
                    {msg && <p className='text-red-600 text-center mt-5'>{msg}</p>}
                    <div className='px-8 py-4'>
                        <div className='mt-8'>
                            <input type="text" placeholder="Email" value={email} className="input input-bordered input-accent w-full max-w-xs"  onChange={(e)=>setEmail(e.target.value)}/>
                        </div>
                        <div className='mt-8'>
                            <input type="password" placeholder="Password" value={password} className="input input-bordered input-accent w-full max-w-xs" onChange={(e)=>setPassword(e.target.value)} />
                        </div>
                        <div className='mt-8'>
                            <button type="submit" className="btn w-80">Login</button>
                        </div>
                        
                    </div>
                </form>
                
            </div>
        </div>
    );
};

export default login;