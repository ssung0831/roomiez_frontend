// import React from 'react';
//import { Component } from 'react';
import { FaHouseUser} from 'react-icons/fa';
import React, { useState } from 'react';
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'



import './Schedule.css';
//import circle from './circle.png';
//import background from "./background.png";


export const Schedule = () => {

  // const [roommates, setRoommates] = useState([]);

  // function getRoommates() {
  //   fetch(`http://localhost:8080/user/${assignTo}`, {
  //     method: 'GET',
  //     headers: { 'Content-Type': 'application/json' },
  //   })
  //   .then(response => response.json())
  //   .then(data => {
  //     console.log(data);
  //   });
  //   setRoommates(data);
  //   console.log(userID);
  // }

  const {roommates} = {
    "roommates": {
        "Kory": [
            {
                "endDate": "01/02/1970",
                "repeat": "weekly",
                "groupID": 3,
                "name": "Task 1",
                "progress": 0,
                "description": "This is a dummy task.",
                "startTime": "2:00pm",
                "ID": 1,
                "endTime": "5:00pm",
                "assigneeID": 1,
                "startDate": "01/01/1970"
            },
            {
                "endDate": "01/02/1970",
                "repeat": "weekly",
                "groupID": 3,
                "name": "Task 2",
                "progress": 1,
                "description": "This is a dummy task.",
                "startTime": "2:00pm",
                "ID": 2,
                "endTime": "5:00pm",
                "assigneeID": 1,
                "startDate": "01/01/1970"
            }
        ],
        "Chely": [
            {
                "endDate": "01/02/1970",
                "repeat": "weekly",
                "groupID": 3,
                "name": "Task 3",
                "progress": 0,
                "description": "This is a dummy task.",
                "startTime": "2:00pm",
                "ID": 3,
                "endTime": "5:00pm",
                "assigneeID": 2,
                "startDate": "01/01/1970"
            }
        ],
        "Tyler": [
          {
              "endDate": "01/02/1970",
              "repeat": "weekly",
              "groupID": 3,
              "name": "Task 1",
              "progress": 0,
              "description": "This is a dummy task.",
              "startTime": "2:00pm",
              "ID": 1,
              "endTime": "5:00pm",
              "assigneeID": 1,
              "startDate": "01/01/1970"
          },
          {
              "endDate": "01/02/1970",
              "repeat": "weekly",
              "groupID": 3,
              "name": "Task 2",
              "progress": 1,
              "description": "This is a dummy task.",
              "startTime": "2:00pm",
              "ID": 2,
              "endTime": "5:00pm",
              "assigneeID": 1,
              "startDate": "01/01/1970"
          },
          {
            "endDate": "01/02/1970",
            "repeat": "weekly",
            "groupID": 3,
            "name": "Task 3",
            "progress": 0,
            "description": "This is a dummy task.",
            "startTime": "2:00pm",
            "ID": 3,
            "endTime": "5:00pm",
            "assigneeID": 2,
            "startDate": "01/01/1970"
        }
      ]
    }
};

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




