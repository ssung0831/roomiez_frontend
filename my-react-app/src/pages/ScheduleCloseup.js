import React, { useState } from 'react';
import './ScheduleCloseup.css';
import image from './home.png';
import image2 from './arrow.png';

export const ScheduleCloseup = () => {
  //TODO SET THIS LATER
  const [taskID, setTaskID] = useState(null);
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [taskName, setTaskName] = useState('');

  function getTaskData() {
    fetch(`/tasks/${taskID}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    });
    const data = Response.json();
    console.log(data);
    setDescription(data["description"]);
    setDueDate(data["endDate"]);
    setTaskName(data["name"]);
  }

  getTaskData();

  return (
    

    <div className = "container-fluid page-container">

    <a href = "/Banner">
   <img src={image} alt="house" style={{ position: 'absolute', top: 8, left: 8, height: '80px', width: '80px', opacity: '80%'}} />
   </a>

   <a href = "/AddTask">
   <img src={image2} alt="arrow" style={{ position: 'absolute', top: 16, right: 8, height: '50px', width: '50px', opacity: '80%' }} />
   </a>
   
    <div class="loginSquare">
    <div style={{ textAlign: 'center', fontSize: '40px', color: '#934C81', fontWeight: 'bold' }}>Task: {taskName}

      <div style={{fontSize: '20px', color: '#2C2B5A', fontWeight: 'thin', marginTop: '10px'}}> Status: Due {dueDate} </div>

      <div className = "taskDescription">
        {description}
      </div>

      <div className = 'buttonname'>
      <button type="submit" class="btn2">remind roommate</button>
      </div>
    
    
    </div>


   
     </div>
     </div>
  )
}


