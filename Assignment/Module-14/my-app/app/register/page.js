"use client"
import React, { useState }  from 'react';

const register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [msg, setMsg] = useState('');


    const handleSubmit = (event) => {
        event.preventDefault();
        // console.log(email)
        if (!email || !password) {
            setMsg('All fields are required');
            return;
        }
    }


    return (
        <div>
            <h1 className='text-center text-4xl mt-8'>Register</h1>
            <div className="card card-compact w-96 bg-base-100 shadow-xl mx-auto mt-20">
                <form onSubmit={handleSubmit}>
                    {msg && <p className='text-red-600 text-center mt-5'>{msg}</p>}
                    <div className='px-8 py-4'>
                        <div className='mt-8'>
                            <input type="text" placeholder="Email" className="input input-bordered input-accent w-full max-w-xs" />
                        </div>
                        <div className='mt-8'>
                            <input type="password" placeholder="Password" className="input input-bordered input-accent w-full max-w-xs" />
                        </div>
                        <div className='mt-8'>
                            <button className="btn w-80">Register</button>
                        </div>
                        
                    </div>
                </form>
                
            </div>
        </div>
    );
};

export default register;