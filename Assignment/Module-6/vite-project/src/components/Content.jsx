import React, { useState } from 'react';
import '../assets/css/Content.css'

const Content = () => {
    
    const [message, setMessage] = useState('');

    const[inputText, setInputText ] =useState('')



    const handleChange = (e) => {
        // this.setMessage({
        //    [e.target.id]: e.target.value
        // })
        setMessage(e.target.value)
        console.log(message)
    }

    const handleClick =(e)=>{
        e.preventDefault()
        setInputText(message)

    }

    return (
        <div className='content'>
            <div className="container-sm">
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Textarea</label>
                    <textarea type="text" className="form-control" id="exampleFormControlTextarea1" placeholder='Enter Your Text Here' onChange={e=>handleChange(e)} rows="3"></textarea>
                </div>
                <div className="mb-3">
                <button type="button" onClick={handleClick} className="btn btn-warning">Get The Text</button>
                </div>
                <p><b>Text:</b>{inputText}</p>
            </div>
        </div>
    );
};

export default Content;