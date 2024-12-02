import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import logo from './make.png';
import "./Home.css";
import "./Cybersecurity.css";

const Navbar = () => {

    return ( 
        <>
            <div className='navtitle'>
                <img src={logo} className='logo'></img>
                <Link to="/" className='eff'>Home</Link>
                <Link to="/about" className='eff'>About</Link>
                <Link to="/pricing" className='eff'>Pricing</Link>
                <Link to="/login" className='eff' id='log'>Login</Link>
            </div>
        </>
    );
};

export default Navbar;
