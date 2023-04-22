import { FaHouseUser} from 'react-icons/fa';
import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'



import './ScheduleGuest.css';

function getTasks(name, description, repeat) {
 // let button = <Button className="taskBox" key={name} href = {`/ScheduleGuestCloseup/${task.ID}`}> <span> {task.name}</span> Due Date: {task.endDate}</Button>

}

export const ScheduleGuest = () => {

    return (
      <div className="container-fluid ScheduleGuest">
        <a href="/Banner">
          <FaHouseUser style={{ fontSize: '75px', color: '#D1C6D6', display: 'flex', justifyContent: 'flex-start', padding: '12px' }} />
        </a>
        <div className="scheduleGuest">

          <div className="Roommate" key="">
          <h2 className='roomieName'>Guest Tasks</h2>
          {/* {roommates[roommateName].map((task, index) => ( */}
            {/* <Button className="taskBox" key={index} href = {`/ScheduleCloseup/${task.ID}`}> <span> {task.name}</span> Due Date: {task.endDate}</Button> */}
          {/* ))} */}
          </div>
        </div>
      </div>
    );
  }




