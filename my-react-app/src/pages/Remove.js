import React, { useState } from 'react';
import './AddTask.css';
import image from './home.png';
import myImage from './circle.png';

export const Remove = () => {

    function Box({ children, ...props }) {
        return <div {...props}>{children}</div>
    }

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const[assignTo, setAssignTo] = useState('');
    const [repeat, setRepeat] = useState('daily');
    const [userID, setUserID] = useState(null);


    function getUserID() {
      fetch(`localhost:8080/user/${name}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
      });
      const data = Response.json();
      console.log(data);
      setUserID(data);
    }
  
    const handleSubmit = (event) => {
      getUserID();
      event.preventDefault();
      // console.log(event);
      fetch('/tasks', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: name, description: description, assigneeName: assignTo, assigneeID: userID})
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


    <form class="addTaskForm" onSubmit = {handleSubmit}>

      <div class="question form-group">
  {/* <label for="name"> task name: </label> */}
  <input id="text" value={name} onChange={(event) => setName(event.target.value)} type="name" placeholder = "Roomate name" required></input>
</div>


        <button type="submit" class="btn3">Submit</button>
     </form>
     
     </div>
     <Box className="circ">
                    
    </Box>
     </div>

     
  )
}