import React, { useState } from "react"
import Button from 'react-bootstrap/Button'
import './loginApp.css';

function authenticateUser(username, password)
{
    fetch('http://localhost8080/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body:JSON.stringify({ username: username, password: password})
    })

    .then (response => response.json())
    .then (data => {
        document.cookie = "username=data.userid"

    })
}

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
            <h2 className="headLogin" >Login</h2>
        <form className="login-form" onSubmit={handleSubmit}>
             <label className ="labelLogin"  htmlFor="email">email</label>
             <input className= "inputLogin" value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" required />
             <label className="labelLogin" htmlFor="password">password</label>
             <input  className= "inputLogin" value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" required />
             <Button className = "loginButton" type="submit" href="/Banner" onClick={authenticateUser(email, pass)} >login</Button>
        </form> 
        <a href = '/Register' className="link-bin" /*onClick={() => props.onFormSwitch('register')}*/  >Don't have an account? Register here.</a>
        </div>
    )
}