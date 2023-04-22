// import React from 'react';
//import { Component } from 'react';
import { FaHouseUser} from 'react-icons/fa';
import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'


import './Schedule.css';
//import circle from './circle.png';
//import background from "./background.png";


export const Schedule = () => {

  const [userID, setUserID] = useState(null);
  const [groupID, setGroupID] = useState(null);
  const [roommates, setRoommates] = useState({});

  var loggedIn = false;
  var userId = "-1";

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
    }

    //track cookie
    console.log(loggedIn);
    setUserID(userId);
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

function getGroupId() {
  fetch(`http://roomieztestnv-env.eba-s98dmkpn.us-east-1.elasticbeanstalk.com/user/` + 1, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  })
  .then(response => response.json())
  .then(data => {
    console.log(data.groupID);
    setGroupID(data.groupID);
  });
}

useEffect(() => {
  if (groupID !== null) {
    getRoommates();
  }
}, [groupID]);

function getRoommates() {
  fetch(`http://roomieztestnv-env.eba-s98dmkpn.us-east-1.elasticbeanstalk.com/groups/${groupID}/userTasks`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  })
  .then(response => response.json())
  .then(data => {
    console.log(data);
    setRoommates(data.roommates);
  });
}

getGroupId();

    return (
      <div className="container-fluid Schedule">
        <a href="/Banner">
          <FaHouseUser style={{ fontSize: '75px', color: '#D1C6D6', display: 'flex', justifyContent: 'flex-start', padding: '12px' }} />
        </a>
        <div className="schedule">

      {Object.keys(roommates).map((roommateName, index) => (
          <div className="Roommate" key={index}>
          <h2 className='roomieName'>{roommateName}</h2>
          {roommates[roommateName].map((task, index) => (
            <Button className="taskBox" key={index} href = {`/ScheduleCloseup/${task.ID}`}> <span> {task.name}</span> Due Date: {task.endDate}</Button>
          ))}
        </div>
      ))}


        </div>
      </div>
    );
  }




