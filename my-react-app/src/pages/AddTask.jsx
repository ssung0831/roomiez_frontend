import React, { useState } from 'react';
import './AddTask.css';
import image from './home.png';
import myImage from './circle.png';

export const AddTask = () => {

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const[assignTo, setAssignTo] = useState('');
    const [repeat, setRepeat] = useState('daily')
  
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log(event);
    }

  return (
    
    <div className = "container-fluid page-container">
   
   <img src={myImage} alt="My Image" className="half-image" style={{position: 'absolute', top: 50, left: 200, transform: 'translateY(-50%)'}} />

    <img src={image} alt="house" style={{ position: 'absolute', top: 8, left: 8, height: '80px', width: '80px' }} />
   
   
    <div class="container login">
    <div style={{ textAlign: 'center', fontSize: '40px', color: '#934C81', fontWeight: 'bold', marginTop: '2%' }}>Add Task</div>


    <form onSubmit = {handleSubmit}>

      <div class="question form-group">
  {/* <label for="name"> task name: </label> */}
  <input id="text" value={name} onChange={(event) => setName(event.target.value)} type="name" placeholder = "task name" required></input>
</div>

<div class="question form-group">
  {/* <label for="description"> description: </label> */}
  <input value={description} onChange={(event) => setDescription(event.target.value)} type="description" placeholder = "description" required></input>
</div>

<div class="question form-group">
  {/* <label for="assignTo"> assign to... </label> */}
  <input value={assignTo} onChange={(event) => setAssignTo(event.target.value)} type="assignTo" placeholder = "assign to..." required></input>
</div>

<div class="question form-group">
  {/* <label for="repeat"> repeat: </label> */}
  <select id="repetition" name="repeat" style={{ height: '38px', minWidth: '10px', maxWidth: '500px' }}>
    <option value="daily">repeat daily</option>
    <option value="weekly">repeat weekly</option>
    <option value="biweekly">repeat biweekly</option>
    <option value="monthly">repeat monthly</option>
  </select>
</div>

        <button type="submit" class="btn">save</button>
     </form>
     
     </div>
     </div>
  )
}


