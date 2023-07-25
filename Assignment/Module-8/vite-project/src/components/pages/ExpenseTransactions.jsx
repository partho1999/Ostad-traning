import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ExpenseTransactions = () => {
    const [amount, setAmount] = useState('');
    const [description, setDescription] = useState('');
    const [expense, setExpense] = useState([])

    const navigate = useNavigate()

    // Function to retrieve data from local storage on initial mount
    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem('myData'));
        setExpense(storedData || []);
    }, []);

    // Function to add new data to the array and update local storage
    const addData = (newData) => {
        // Check if the new data has the "amount" value
        setExpense((prevData) => {
            const updatedData = [...prevData, newData];
            let filteredArray = updatedData.filter((element) => Boolean(element.amount));
            localStorage.setItem('myData', JSON.stringify(filteredArray));
            return filteredArray;
        });
        
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        setExpense([
            ...expense,
            {
              id:Date.now(),
              amount:amount,
              description:description
            }
        ])

        //console.log('Expense form submitted:', { amount, description });
        console.log('Expense form submitted:', expense);
        addData(expense);
        setAmount('');
        setDescription('');
        //navigate('/')
        
    };

    // Function to remove data from the array and update local storage
    const removeData = (id) => {
        setExpense((prevData) => {
            const updatedData = prevData.filter((item) => item.id !== id);
            localStorage.setItem('myData', JSON.stringify(updatedData));
            return updatedData;
        });
    };

    

    return (
        <>
            <form onSubmit={handleSubmit}>
                <h2 className='text-center'>Expense Form</h2>
                <hr />
                <div className='d-flex justify-content-evenly'>
                    <div>
                        
                        <input
                        type="number"
                        className="form-control"
                        id="amount"
                        placeholder='Amount'
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        />
                    </div>
                    <div>
                        
                        <input
                        type="text"
                        className="form-control"
                        id="description"
                        placeholder='Description'
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">Add</button>
                </div>
            </form>
            <hr />
            <div className='card w-75 m-auto'>
                <h4 className='text-center'>Expenses Histroy</h4>
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
                          expense.map((data, index)=>{
                            return(
                                // eslint-disable-next-line react/jsx-key
                                <tr>
                                    <th scope="row">{index +1}</th>
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

            <div className='d-flex justify-content-evenly'>
                <button type="button" onClick={()=>navigate('/')} className="btn btn-link text-decoration-none">Home</button>
                <button type="button" onClick={()=>navigate('/income')} className="btn btn-link text-decoration-none">Add Income</button>
            </div>
        </>
    );
};

export default ExpenseTransactions;