import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


import Home from './components/Home';
import ExpenseForm from './components/pages/ExpenseTransactions';
import Navbar from './components/Navbar';
import IncomeForm from './components/pages/IncomeTransactions';


function App() {
  

  return (
    <>
      <Router>
        <>
           <Navbar/>
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/income" element={<IncomeForm/>} />
              <Route path="/expenses" element={<ExpenseForm/>} />
              
            </Routes>
          
        </>
      </Router>
    </>

  )
}

export default App
