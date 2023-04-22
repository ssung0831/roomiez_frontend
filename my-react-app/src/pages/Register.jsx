import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

import './loginApp.css';
import './loginApp.js';


export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        //prevents page from getting reloaded and losing our state
        e.preventDefault();
        //console.log("email " + email);
        //registerUser(email, pass, name);
            fetch('http://localhost:8080/user/registration', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({username: email, password: pass, name: name})
            })
        
            .then (response => response.json())
            .then (data => {
                document.cookie = "username=" + data.userid;
                navigate('/Banner');
        
            })
    }


    return (
        <div className="auth-form-container">
            <h2 className="headRegister" >Register</h2>
        <form className="register-form" onSubmit={handleSubmit}>
            <label className="labelLogin" htmlFor="name" >Full name</label>
            <input className = "inputLogin" value={name} onChange={(e) => setName(e.target.value)} name="name" id="name"  placeholder="full name" required/>
             <label  className="labelLogin" htmlFor="email">email</label>
             <input className = "inputLogin" value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" required/>
             <label className="labelLogin" htmlFor="password">password</label>
             <input className = "inputLogin" value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="password" id="********" name="password" required/>
             <Button className = "loginButton" type="submit">login</Button>
        </form> 
        <a href = '/Login' className="link-bin" /*onClick={() => props.onFormSwitch('login')}*/ >Already have an account? Login here.</a>
        </div>
    )
}