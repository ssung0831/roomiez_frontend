import React, { useState } from 'react';
import './ScheduleCloseup.css';
import image from './home.png';
import image2 from './arrow.png';

export const ScheduleCloseup = () => {

  return (
    
    <div className = "container-fluid page-container">

    <a href = "/AddTask">
   <img src={image} alt="house" style={{ position: 'absolute', top: 8, left: 8, height: '80px', width: '80px', opacity: '80%'}} />
   </a>

   <a href = "/AddTask">
   <img src={image2} alt="arrow" style={{ position: 'absolute', top: 16, right: 8, height: '50px', width: '50px', opacity: '80%' }} />
   </a>
   
    <div class="container login">
    <div style={{ textAlign: 'center', fontSize: '40px', color: '#934C81', fontWeight: 'bold' }}>Task: 

      <div style={{fontSize: '20px', color: '#2C2B5A', fontWeight: 'thin', marginTop: '10px'}}> Status: Due </div>

      <div className = "taskDescription">
        Description
      </div>

      <div className = 'buttonname'>
      <button type="submit" class="btn2">remind roommate</button>
      </div>
    
    
    </div>


   
     </div>
     </div>
  )
}


