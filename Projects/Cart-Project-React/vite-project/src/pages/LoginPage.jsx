import React, { useState } from 'react';
import UserLogin from '../utills/UserLogin';
import { useNavigate } from 'react-router-dom';
import Layout from '../Layout/Layout';

const LoginPage = () => {
   const [email, setEmail]=useState('');
   const navigate = useNavigate(); 

   const handleLogin=()=>{
       UserLogin(email)
       .then((data)=>{
         if(data?.msg==="success"){
            navigate(`/otp?email=${email}`)
         }
       })
       .catch(err=> console.log('there was an error'))
   }

    return (
        <Layout>
            <div className="container  mx-auto">
                <div className="grid grid-cols-1 mt-2 md:grid-cols-1 lg:grid-cols-1 gap-3">
                    <div className="flex items-center w-full justify-center h-screen">
                        <div className="card w-8/12 card-side bg-white shadow-xl">
                            <figure><img className="h-96 w-96" src="/images/login-banner.png" alt="Movie"/></figure>
                            <div className="card-body justify-center items-center">
                                <div className="w-8/12">
                                    <h1 className="text-2xl my-4">WELCOME BACK</h1>
                                    <p className="mb-4 text-sm text-gray-600">Enter your email address and get verification pin</p>
                                    <input type="text" value={email} placeholder="Email.." className="input w-full bg-white rounded-lg input-bordered" onChange={(e)=>setEmail(e.target.value)} />
                                    <button onClick={handleLogin} className="btn rounded-lg w-full my-4 btn-primary">Next</button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default LoginPage;