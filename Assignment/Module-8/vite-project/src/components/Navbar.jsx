import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">IncoExpenses</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink  to="/" className="nav-link" activeClassName="active">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/income" className="nav-link" activeClassName="active">Income</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/expenses" className="nav-link" activeClassName="active">Expenses</NavLink>
                            </li>
                           
                        </ul>
                    </div>
                </div>
            </nav>
            {/* <nav className='d-flex'>
                <ul>
                    <li>
                        <NavLink exact to="/" activeClassName="active">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/income" activeClassName="active">Income</NavLink>
                    </li>
                    <li>
                        <NavLink to="/expenses" activeClassName="active">Expenses</NavLink>
                    </li>
                </ul>
            </nav> */}
        </>
    );
};

export default Navbar;