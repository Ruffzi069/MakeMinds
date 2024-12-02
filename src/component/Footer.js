import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <>
            <div className='footer'>
                <div id='con1'>
                    <ul>
                        <li><h2>Get to know</h2></li>
                        <li><a href='/' id='a'>About us</a></li>
                        <li><a href='/' id='a'>Careers</a></li>
                        <li><a href='/' id='a'>Press Releases</a></li>
                        <li><a href='/' id='a'>Make Mind Science</a></li>
                    </ul>
                </div>
                <div id='con2'>
                <ul>
                        <li><h2>Contact Us</h2></li>
                        <li><a href='/' id='a'>Instagram</a></li>
                        <li><a href='/' id='a'>Facebook</a></li>
                        <li><a href='/' id='a'>Twitter</a></li>
                        <li><a href='/' id='a'>LinkedIn</a></li>
                    </ul>
                </div>
                <div id='con3'>
                    <ul>
                    <li><h2>Let Us Help You</h2></li>
                        <li><a href='/' id='a'>Covid-19</a></li>
                        <li><a href='/' id='a'>Your Account</a></li>
                        <li><a href='/' id='a'>Return Center</a></li>
                        <li><a href='/' id='a'>App Download</a></li>
                        <li><a href='/' id='a'>Help</a></li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Footer;
