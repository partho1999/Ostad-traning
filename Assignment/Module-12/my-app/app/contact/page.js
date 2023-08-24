import React from 'react';

const contact = () => {
    return (
        <div className='my-8'>
            <h1 className='text-center text-4xl mt-8 b-4'>Contact Us</h1>
            <div className='flex flex-cols justify-center mt-8 gap-8'>
                <div className="card w-96 bg-base-100 shadow-xl ">
                    <div className="card-body">
                        <div className='form-control'>
                            <label htmlFor="Name" className="label"> Name:</label>
                            <input type="text" className="input input-bordered" id="Name" />
                        </div>
                        <div className='form-control'>
                            <label htmlFor="Email" className="label">Email:</label>
                            <input type="text" className="input input-bordered" id="Email" />
                        </div>
                        <div className='form-control'>
                            <label htmlFor="website" className="label">Website:</label>
                            <input type="url" className="input input-bordered" id="website"/>
                        </div>
                        <div className='form-control'>
                            <label htmlFor="message" className="label">Message:</label>
                            <textarea placeholder="message" className="textarea textarea-bordered textarea-md w-full max-w-xs" ></textarea>
                        </div>
                        <button className='btn btn-primary mt-5'>Send</button>
                    </div>
                </div>
            </div>
        </div>
       
    );
};

export default contact;