import React, { useState } from 'react';
import './AddTask.css';
import image from './home.png';
import myImage from './circle.png';

export const Remove = () => {

    var loggedIn = false;
    var userId = "-1";
    const [removeSuccess, setRemoveSuccess] = useState(false);

    //read in cookie on open
    window.onload = function getID() {
        //check if user is logged in
      const name = 'userId';
      console.log(document.cookie);

      console.log(getCookie(name));

      const newId = getCookie(name)
      if (getCookie(name) !== ""){
        loggedIn = true;
        userId = newId;
        //call function to create navbar
        //createNav();
      }
      //track cookie
      console.log(loggedIn);
      console.log(userId);
    }

    //read cookieValue
    function getCookie(cname) {
      let name = cname + "=";
      let decodedCookie = decodeURIComponent(document.cookie);
      let ca = decodedCookie.split(';');
      for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') {
          c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
          return c.substring(name.length, c.length);
        }
      }
      return "";
    }

    function Box({ children, ...props }) {
        return <div {...props}>{children}</div>
    }

    const [username, setName] = useState('');
    const [userID, setUserID] = useState(null);
    //http://localhost:8080/user/${userID}/setGroup?groupID=0

    const handleSubmit = (event) =>{
      event.preventDefault();
      // Retrieve the username from the state
      const username = document.getElementById("text").value;
      console.log("Submitted username:", username);
      getUserID();

    }

    function getUserID() {
      console.log(username);
      fetch(`http://roomieztestnv-env.eba-s98dmkpn.us-east-1.elasticbeanstalk.com/user/getId/${username}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
      })
      .then(response => response.json())
      .then(data => {
        //data = Response.json();
        //var userid = data; 
        console.log("this is data:"+ data);
        setUserID(data);

        // fetch(`http://localhost:8080/user/${userID}/setGroup?groupID=3`, { mode: 'no-cors' })
        // .then(response => {
        //   // Handle response

        // })
        fetch(`http://roomieztestnv-env.eba-s98dmkpn.us-east-1.elasticbeanstalk.com/user/${data}/setGroup?groupID=0`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          })
        .then(response => {
          //console.log(response);
          if (response.status===200) {
            // group created successfully
            console.log("roomie removed successfully:", response.json());
            setRemoveSuccess(true);
            // return response.json();
          } else {
            // handle error
            console.log("roomie removal failed:", response.status);
            throw new Error('roomie removal failed');
          }
    })
  
      });
     
    }
    

  return (
    
    <div className = "container-fluid page-container">
   
   <img src={myImage} alt="My Image" className="half-image" style={{position: 'absolute', top: 50, left: 200, transform: 'translateY(-50%)'}} />

   <a href = "/Banner">
   <img src={image} alt="house" style={{ position: 'absolute', top: 8, left: 8, height: '80px', width: '80px', opacity: '80%' }} />
   </a>
   
   
    <div className="loginBox">
    <div style={{ textAlign: 'center', fontSize: '40px', color: '#934C81', fontWeight: 'bold', marginTop: '2%' }}>Remove Roomate</div>
    {removeSuccess && <p>Remove Successful</p>}
    
    <form className="addTaskForm" onSubmit = {handleSubmit}>

      <div className="question form-group">

        <input id="text" value={username} onChange={(event) => setName(event.target.value)} type="username" placeholder = "Roomate email" required></input>
      </div>


        <button type="submit" className="btn3">Submit</button>
     </form>
     
     </div>
     <Box className="circ">
                    
    </Box>
     </div>

     
  )
}
