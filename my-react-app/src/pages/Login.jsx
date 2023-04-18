import React, { useState } from "react"

import './loginApp.css';


export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        //prevents page from getting reloaded and losing our state
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="auth-form-container">
            <h2 className="head" >Login</h2>
        <form className="login-form" onSubmit={handleSubmit}>
             <label htmlFor="email">email</label>
             <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
             <label htmlFor="password">password</label>
             <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
             <a href = "/Banner">
             <button className = "loginButton" type="submit">login</button>
             </a>
        </form> 
        <a href = '/Register' className="link-bin" /*onClick={() => props.onFormSwitch('register')}*/  >Don't have an account? Register here.</a>
        </div>
    )
}