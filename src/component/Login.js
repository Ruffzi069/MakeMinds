import React from 'react';
import "./Login.css"
const Login = () => {
    return (
        <>
        <div id='lognn'>
            <form className='logn'>
                <h1>Login Page</h1>
                <label>Email Address: <input type='text'></input></label>
                <label>Password: <input type='password'></input></label>
                <button className='button2'>SUBMIT</button>
            </form>
            </div>
        </>
    );
};

export default Login;
