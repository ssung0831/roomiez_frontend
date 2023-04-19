import React from 'react';
//import { Component } from 'react';
import { FaHouseUser} from 'react-icons/fa';


import './Schedule.css';
//import circle from './circle.png';
//import background from "./background.png";



export const Schedule = () => {


  return (
    <div className="container-fluid Schedule">
      <a href = "/Banner">
     <FaHouseUser style={{ fontSize: '65px', color: '#D1C6D6', display: 'flex', justifyContent: 'flex-start', padding: '12px' }} />
     </a> 
    <div className="schedule">
      <div className="Roommate">
        <h2 className='roomieName'>Roommate 1</h2>
     
        <button className="taskBox">
        </button>
  
   
        <button className="taskBox">
        </button>
    
    
        <button className="taskBox">
        </button>
      
      </div>
      <div className="Roommate">
      <h2 className='roomieName'>Roommate 2</h2>
      <button className="taskBox">
      </button>
      <button className="taskBox">
      </button>
      <button className="taskBox">
      </button>
      </div>
      <div className="Roommate">
      <h2 className='roomieName'>Roommate 3</h2>
      <button className="taskBox">
      </button>
      <button className="taskBox">
      </button>
      <button className="taskBox">
      </button>
      </div>
      <div className="Roommate">
      <h2 className='roomieName'>Roommate 4</h2>
      <button className="taskBox">
      </button>
      <button className="taskBox">
      </button>
      <button className="taskBox">
      </button>
      </div>
    </div>


    </div>

    );
  


}

