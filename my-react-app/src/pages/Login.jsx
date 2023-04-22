import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import './loginApp.css';


export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    /*const [loginSuccess, setLoginSuccess] = useState(false);*/
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        //prevents page from getting reloaded and losing our state
        
        e.preventDefault();
        fetch('http://roomieztestnv-env.eba-s98dmkpn.us-east-1.elasticbeanstalk.com/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body:JSON.stringify({username: email, password: pass})
        })
    
        .then (response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Invalid login');
            }
        })
        .then (data => {
            document.cookie = "userId=" + data.id;
            console.log(document.cookie);
            /*setLoginSuccess(true);*/
            navigate('/Banner');
    
        })
        .catch(error => {
            console.error('Login error:', error);
            setErrorMessage(error.message);
        });
    }

    return (
        <div className="auth-form-container">
            <h2 className="headLogin" >Login</h2>
            {/*loginSuccess && <p>Login successful!</p>*/}
            {errorMessage && <p className="errorMessage"> {errorMessage}</p>}
        <form className="login-form" onSubmit={handleSubmit}>
             <label className ="labelLogin"  htmlFor="email">email</label>
             <input className= "inputLogin" value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" required />
             <label className="labelLogin" htmlFor="password">password</label>
             <input  className= "inputLogin" value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" required />
             <Button className = "loginButton" type="submit" >login</Button>
        </form> 
        <a href = '/Register' className="link-bin">Don't have an account? Register here.</a>
        </div>
    )
}