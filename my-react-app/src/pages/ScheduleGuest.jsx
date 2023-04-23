import { FaHouseUser} from 'react-icons/fa';
import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import image from './home.png';
import myImage from './circle.png';



import './ScheduleGuest.css';

function getTasks(taskList, name, description, repeat) {
  const buttons = [];
  for (let i = 0; i < taskList.length; i++) {
    let task = taskList[i];
    //Create a button for each task
    buttons.push(<Button className="taskBox2" key={taskList[i].name}> <span> {task.name}</span> Due Date: {taskList[i].repeat} Desciption: {taskList[i].description} </Button>);

  }
  return buttons;
}

export const ScheduleGuest = () => {
  const [taskList, setTaskList] = useState([]);
  const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const[assignTo, setAssignTo] = useState('');
    const [repeat, setRepeat] = useState('Tomorrow');
    const [assigneeID, setAssigneeID] = useState('');
    const [groupID, setGroupID] = useState(null);
    const members = new Map();
    const [dropdownOptions, setDropdownOptions] = useState([]);
    const [first, setFirst] = useState('');
    const [buttons, setButtons] = useState([]);

    const handleSubmit = (event) => {
      //Append to task list
      event.preventDefault();
      taskList.push({name: name, description: description, repeat: repeat, assigneeID: assigneeID});
      console.log("taskList: ", taskList);
      setButtons(getTasks(taskList, name, description, repeat));
      console.log("buttons: ", buttons);
    }

    return (
      <div className="container-fluid ScheduleGuest">
        <a href="/Banner">
          
          <FaHouseUser style={{ fontSize: '75px', color: '#D1C6D6', display: 'flex', justifyContent: 'flex-start', padding: '12px' }} />
        </a>
        <img src={myImage} alt="My Image" className="half-image" style={{position: 'absolute', top: 50, left: 200, transform: 'translateY(-50%)'}} />

  <div class="row">
      <div class="column">
      <div className="loginBox2">
          <div style={{ align: 'right', textAlign: 'center', fontSize: '40px', color: '#934C81', fontWeight: 'bold', marginTop: '2%' }}>Add Task</div>


          <form class="addTaskForm" onSubmit = {handleSubmit}>

            <div class="question form-group">
            {/* <label for="name"> task name: </label> */}
            <input id="text" value={name} onChange={(event) => setName(event.target.value)} type="name" placeholder = "task name" required></input>
          </div>

          <div class="question form-group">
            {/* <label for="description"> description: </label> */}
            <input value={description} onChange={(event) => setDescription(event.target.value)} type="description" placeholder = "description" required></input>
          </div>

          <div class="question form-group">
            <label for="repeat"> due in: </label>
            <select id="repetition" name="repeat" value={repeat} onChange={(event) => setRepeat(event.target.value)} style={{ width: '500%', height: '38px', minWidth: '10px', maxWidth: '500px' }}>
              <option value="Tomorrow">one day</option>
              <option value="In one week">one week</option>
              <option value="In two weeks">two weeks</option>
              <option value="In a month">one month</option>
            </select>
          </div>
              <button type="submit" className="btn3" >save</button>
          </form>
          
          </div>

      </div>
      <div class="column">
       
        <div className="Roommate" key={1}>
          <h2 className='roomieName'></h2>
          <div className="buttons">{buttons}</div>
           
        </div>
      </div>
    </div>
   
      </div>
    );
  }




