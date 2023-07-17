import React, { useState } from 'react';

const TodoList = () => {
    const [NewToDo, setNewToDo]= useState("")
    const [ToDo, setAllToDo] =useState([])

    const handleChange = (e) => {
        
        setNewToDo(e.target.value)
        //console.log(NewToDo)
    }

    const addNew =()=>{
        setAllToDo([
            ...ToDo, 
            {
                roll: Date.now(),
                text:NewToDo
            }
        ])
        setNewToDo("");
        console.log(NewToDo)
        console.log(ToDo)
    }

   

    return (
        <div>
            <div className="card w-50 m-auto">
                <div className="card-body">
                    <div className="input-group mb-3">
                        <input type="text" className="form-control border border-warning" value={NewToDo} onChange={e=>handleChange(e)} placeholder="Add Your TO-DO" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                        <button className="btn btn-outline-warning" onClick={addNew} type="button" id="button-addon2">Add</button>
                    </div>
                    <h1 className='text-center p-3'>To-Do List</h1>
                    <hr />
                    <div className='card  border border-warning overflow-auto'>
                        <div className='card-body' style={{height: "350px"}}>
                        
                            {ToDo.map((data)=>{
                                return(
                                    
                                        // eslint-disable-next-line react/jsx-key
                                        <div className='card border border-warning mt-3 rounded-pill bg-warning'>
                                            <div className='card-body  d-flex justify-content-between my-auto'>
                                                <span key={data.roll} className='d-flex align-items-center'><strong>{data.text}</strong></span>
                                                <button type="button" className="btn-close d-flex align-items-center" onClick={()=>setAllToDo(ToDo.filter((ToDo)=>ToDo.roll!==data.roll))} aria-label="Close"></button> 
                                            </div>
                                        </div>
                                    
                                    
                                )
                            })}  
                        </div>
                    </div>     
                      
                </div>
            </div>
        </div>
    );
};

export default TodoList;