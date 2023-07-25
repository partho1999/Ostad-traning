import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Home = () => {

    const [ exData, setExData] = useState([])
    const [ inData, setInData] = useState([])
    const navigate =useNavigate()

    const addIncome=(event)=>{
        event.preventDefault();

        navigate('/income')

    }

    const addExpenses=(event)=>{
        event.preventDefault();

        navigate('/expenses')

    }

    


    
    // Function to retrieve data from local storage on initial mount
    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem('myData'));
        setExData(storedData || []);
    }, []);

    // Function to retrieve data from local storage on initial mount
    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem('inmyData'));
        setInData(storedData || []);
    }, []);

    // Function to remove data from the array and update local storage
    const removeData = (id) => {
        setExData((prevData) => {
            const updatedData = prevData.filter((item) => item.id !== id);
            localStorage.setItem('myData', JSON.stringify(updatedData));
            return updatedData;
        });
    };

    // Function to remove data from the array and update local storage
    const removeDatain = (id) => {
        setInData((prevData) => {
            const updatedData = prevData.filter((item) => item.id !== id);
            localStorage.setItem('inmyData', JSON.stringify(updatedData));
            return updatedData;
        });
    };

    // Calculate the sum of 'value' property after converting them to integers
    const sumEx = exData.reduce((acc, obj) => acc + parseInt(obj.amount, 10), 0);

    // Calculate the sum of 'value' property after converting them to integers
    const sumIn = inData.reduce((acc, obj) => acc + parseInt(obj.amount, 10), 0);

    // calculate the reamining value
    const sumRemain = sumIn - sumEx;
    
    return (
        <>
            
            <div className='d-flex justify-content-around'>
                <span className="badge rounded-pill bg-success mt-5 mb-5 p-4  text-center">Blance:{sumIn}TK</span>
                <span className="badge rounded-pill bg-primary mt-5 mb-5 p-4  text-center">Reamining:{sumRemain}TK</span>
                <span className="badge rounded-pill bg-danger mt-5 mb-5 p-4  text-center">Expense:{sumEx}TK</span>
            </div>
            <div className='d-flex justify-content-center'>
                <button type="button" onClick={addIncome} className="btn btn-dark mx-2">Add Income</button>
                <button type="button" onClick={addExpenses} className="btn btn-outline-dark  rounded">Add Expenses</button>
            </div>
            <hr />
            <div className='d-flex justify-content-evenly'>
                <div>
                    <h4>Income List</h4>
                    <hr />
                    <table className="table ">
                        <thead>
                            <tr>
                                <th scope="col">SL</th>
                                <th scope="col">Amount</th>
                                <th scope="col">Description</th>
                                <th scope="col">Action</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            {
                                inData.map((data, index)=>{
                                    return(
                                        // eslint-disable-next-line react/jsx-key
                                        <tr>
                                            <th scope="row">{index +1}</th>
                                            <td>{data.amount}</td>
                                            <td>{data.description}</td>
                                            <td><button type="button" className="btn-close" onClick={() => removeDatain(data.id)} aria-label="Close"></button></td>
                                        </tr>
                                    )
                                })
                            }
                        
                        </tbody>
                    </table>
                </div>
                <div>
                
                    <h4>Expense List</h4>
                    <hr />
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">SL</th>
                                <th scope="col">Amount</th>
                                <th scope="col">Description</th>
                                <th scope="col">Action</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            {
                                exData.map((data , index)=>{
                                    return(
                                        // eslint-disable-next-line react/jsx-key
                                        <tr>
                                            <th scope="row">{index+1}</th>
                                            <td>{data.amount}</td>
                                            <td>{data.description}</td>
                                            <td><button type="button" className="btn-close" onClick={() => removeData(data.id)} aria-label="Close"></button></td>
                                        </tr>
                                    )
                                })
                            }
                       
                        </tbody>
                    </table>
                </div>
            </div>
            
        </>
    );
};

export default Home;