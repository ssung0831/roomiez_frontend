import React from 'react';
import { Component } from 'react';
import { FaHouseUser} from 'react-icons/fa';

import './JoinGroup.css';
//import circle from './circle.png';
//import background from "./background.png";


function Box({ children, ...props }) {
  return <div {...props}>{children}</div>
}

export const JoinGroup = () => {


  return (
    
    <div className = "container-fluid JoinGroup">
        <div className="iconflex">
        <a href = "/Banner">
          <FaHouseUser style={{ fontSize: '65px', color: '#D1C6D6', display: 'flex', justifyContent: 'flex-start', padding: '12px' }} /> 
        </a>
        </div>

        <div className="MyContainer">
          <Box className="code-boxes1">
            Generate Code
            <form className='joingroupform'>
              <label>
                <input type="text" code="code" />
              </label>
              <button className="buttonJoinGroup">copy to clipboard</button>
            </form>
            
          </Box>

          <Box className="code-boxes1">
            Join Group
            <form>
              <label>
                <input type="text" code="code" />
              </label>
            </form>
            <button className="buttonJoinGroup">join</button>
        </Box>
        <Box className="circle2"></Box> 
        </div>

    </div>
    

    );
  


}
