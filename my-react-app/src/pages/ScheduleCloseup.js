import React, { useState } from 'react';
import './ScheduleCloseup.css';
import image from './home.png';
import image2 from './arrow.png';
import Button from 'react-bootstrap/Button'

export const ScheduleCloseup = () => {
  

 const [taskID, setTaskID] = useState(window.location.href.split("/") [4]);
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [taskName, setTaskName] = useState('');
  const [assignTo, setAssignTo] = useState('');

//  setTaskID(window.location.href.split("/") [4]);

  function getTaskData() {
    fetch(`http://roomieztestnv-env.eba-s98dmkpn.us-east-1.elasticbeanstalk.com/tasks/${taskID}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    })
    .then(response => response.json())
    .then(data => {
    console.log(data);
    setDescription(data.description);
    setDueDate(data.endDate);
    setTaskName(data.name);
    setAssignTo(data.assigneeName);
  });
  
  }

 getTaskData();


  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event);
    console.log("tyler2");
    fetch(`http://roomieztestnv-env.eba-s98dmkpn.us-east-1.elasticbeanstalk.com/groups/email?username=${assignTo}&taskIn=${taskID}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
    })
    .then(response => response.json())
    .then(data => {
      console.log("tyler");
    });
  }

  return (
    

    <div className = "container-fluid page-container">

    <a href = "/Banner">
   <img src={image} alt="house" style={{ position: 'absolute', top: 8, left: 8, height: '80px', width: '80px', opacity: '80%'}} />
   </a>

   <a href = "/Schedule">
   <img src={image2} alt="arrow" style={{ position: 'absolute', top: 16, right: 8, height: '50px', width: '50px', opacity: '80%' }} />
   </a>
   
    <div class="loginSquare">
    <div style={{ textAlign: 'center', fontSize: '40px', color: '#934C81', fontWeight: 'bold' }}>{taskName}

      <div style={{fontSize: '20px', color: '#2C2B5A', fontWeight: 'thin', marginTop: '10px'}}> Status: Due {dueDate} </div>

      <div className = "taskDescription">
        {description}
      </div>

      <form onSubmit={handleSubmit}>
      <div className = 'buttonname'>
      <Button type="submit" className="btn2">remind roommate</Button>
      </div>
      </form>
    
    
    </div>


   
     </div>
     </div>
  )
}


