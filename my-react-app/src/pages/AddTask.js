import React, { useState } from 'react';
import './AddTask.css';
import image from './home.png';
import myImage from './circle.png';

export const AddTask = () => {

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const[assignTo, setAssignTo] = useState('');
    const [repeat, setRepeat] = useState('daily');
    const [userID, setUserID] = useState(null);
    const members = new Map();

    // const options = members.map((member) => (
    //   <option key={member.username} value={member.name}>
    //     {username.name}
    //   </option>
    // ));

    // function getUserID() {
    //   fetch(`http://localhost:8080/user/${assignTo}`, {
    //     method: 'GET',
    //     headers: { 'Content-Type': 'application/json' },
    //   })
    //   .then(response => response.json())
    //   .then(data => {
    //     console.log(data);
    //   });
    //   setUserID(data);
    //   console.log(userID);
    // }

    // function getUsernames() {
    //   fetch(`http://localhost:8080/groups/${groupID}/users`, {
    //     method: 'GET',
    //     headers: { 'Content-Type': 'application/json' },
    //   })
    //   .then(response => response.json())
    //   .then(data => {
    //     console.log(data);

    //     data.users.forEach(user => {
    //       members.set(user.name, user.username);
    //     });
    //   });
    //   console.log(members);
    // }
  
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log(event);
      // getUserID();
      // fetch('http://localhost:8080/tasks/addTask', {
      // method: 'POST',
      // headers: { 'Content-Type': 'application/json' },
      // body: JSON.stringify({ name: name, description: description, assigneeName: assignTo, assigneeID: "", repeatTask: repeat})
      // })
      // .then(response => response.json())
      // .then(data => {
      //   console.log(data);
      // });
    }


   // getUsernames();

  return (
    
    <div className = "container-fluid page-container">
   
   <img src={myImage} alt="My Image" className="half-image" style={{position: 'absolute', top: 50, left: 200, transform: 'translateY(-50%)'}} />

   <a href = "/Banner">
   <img src={image} alt="house" style={{ position: 'absolute', top: 8, left: 8, height: '80px', width: '80px', opacity: '80%' }} />
   </a>
   
   
    <div className="loginBox">
    <div style={{ textAlign: 'center', fontSize: '40px', color: '#934C81', fontWeight: 'bold', marginTop: '2%' }}>Add Task</div>


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
  <label for="assignTo"> assign to... </label>
  <input value={assignTo} onChange={(event) => setAssignTo(event.target.value)} type="assignTo" placeholder = "assign to..." required></input>
  {/* <select id = "assignTo" name = "assignTo" value = {assignTo} onChange = {(event) => setAssignTo(event.target.value)} style={{ height: '38px', minWidth: '10px', maxWidth: '500px' }}>
    {options}</select> */}

</div>

<div class="question form-group">
  <label for="repeat"> repeat: </label>
  <select id="repetition" name="repeat" value={repeat} onChange={(event) => setRepeat(event.target.value)} style={{ width: '500%', height: '38px', minWidth: '10px', maxWidth: '500px' }}>
    <option value="daily">repeat daily</option>
    <option value="weekly">repeat weekly</option>
    <option value="biweekly">repeat biweekly</option>
    <option value="monthly">repeat monthly</option>
  </select>
</div>
        <button type="submit" class="btn3">save</button>
     </form>
     
     </div>
     </div>
  )
}


