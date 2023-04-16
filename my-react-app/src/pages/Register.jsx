import React, { useState } from "react";

import './loginApp.css';
import './loginApp.js';

export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        //prevents page from getting reloaded and losing our state
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="auth-form-container">
            <h2 className="head2" >Register</h2>
        <form className="register-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Full name</label>
            <input value={name} onChange={(e) => setName(e.target.value)} name="name" id="name" placeholder="full name" />
             <label htmlFor="email">email</label>
             <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
             <label htmlFor="password">password</label>
             <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="password" id="********" name="password" />
             <button className = "loginButton" type="submit">login</button>
        </form> 
        <a href = '/Login' className="link-bin" /*onClick={() => props.onFormSwitch('login')}*/ >Already have an account? Login here.</a>
        </div>
    )
}