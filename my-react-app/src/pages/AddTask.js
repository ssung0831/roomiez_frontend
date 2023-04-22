import React, { useEffect, useState } from 'react';
import './AddTask.css';
import image from './home.png';
import myImage from './circle.png';
import { usePollingEffect } from './utils';
import { Modal } from 'react-bootstrap';


export const AddTask = () => {

  const [userID, setUserID] = useState(null);

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


    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const[assignTo, setAssignTo] = useState('');
    const [repeat, setRepeat] = useState('daily');
    const [assigneeID, setAssigneeID] = useState('');
    const [groupID, setGroupID] = useState(null);
    const members = new Map();
    const [dropdownOptions, setDropdownOptions] = useState([]);
    const [first, setFirst] = useState('');

      /*put in name of assignee to get their id GOOD*/
    //   function getGroupId(){
    //   fetch(`http://roomieztestnv-env.eba-s98dmkpn.us-east-1.elasticbeanstalk.com/user/` + 1, {
    //     method: 'GET',
    //     headers: { 'Content-Type': 'application/json' },
    //   })
    //   .then(response => response.json())
    //   .then(data => {
    //     console.log(data.groupID);
    //     setGroupID(data.groupID);
    //   });
    // }

    /*put in user's id to get their group- this will create the dropdown GOOD */
   // useEffect(() => {
      fetch(`http://roomieztestnv-env.eba-s98dmkpn.us-east-1.elasticbeanstalk.com/user/` + userID, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      })
      .then(response => response.json())
      .then(data => {
        console.log("groupid=" + data.groupID);
        setGroupID(data.groupID);
      });
  //  }, []);


    /*once i have the group id, i canx get all the usernames and put them in a dropdown GOOD */
  //  function getUsernames() {
    useEffect(() => {
      fetch(`http://roomieztestnv-env.eba-s98dmkpn.us-east-1.elasticbeanstalk.com/groups/${groupID}/users`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      })
      .then(response => response.json())
      .then(data => {
        console.log(data.users);
        
        data.users.forEach(user => {
          members.set(user.username, user.name);
        });
        
        console.log(members);
      })
      .then(() => {
        const options = Array.from(members.keys()).map((username) => (
          <option key={username} value={username}>
            {members.get(username)}
          </option>
            
        ));

        setDropdownOptions(options);

        console.log("shit");
        console.log(members);
        const initialAssignTo = [...members.keys()][0];
        console.log("poop" + initialAssignTo);
       // const[assignTo, setAssignTo] = useState(initialAssignTo);
       setAssignTo(initialAssignTo);
       setFirst(initialAssignTo);
    
      });
    }, [groupID]);

   
 //   getGroupId();
 //   getUsernames();

 
    function getUserID() {
      console.log(assignTo);
      fetch(`http://roomieztestnv-env.eba-s98dmkpn.us-east-1.elasticbeanstalk.com/user/getId/${assignTo}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      })
      .then(response => response.json())
      .then(data => {
      setAssigneeID(data);
      console.log("hi"+ assigneeID);
      });
    }

    const [showModal, setShowModal] = useState(false);
    const handleModal = () => {
     setShowModal(!showModal);
   };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log(event);
      getUserID();
      console.log(assigneeID);
      console.log(assignTo);
      fetch('http://roomieztestnv-env.eba-s98dmkpn.us-east-1.elasticbeanstalk.com/tasks', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: name, description: description, assigneeName: assignTo, assigneeID: assigneeID, repeatTask: repeat})
      })
      .then(response => response.json())
      .then(data => {
        console.log("TYLER");
        console.log(name);
        console.log(description);
        console.log(assignTo);
        console.log(assigneeID);
        console.log(repeat);
        console.log(data);

        setName('');
        setDescription('');
        setAssignTo(first);
        setRepeat('daily');
      });
    }


    // getGroupId();
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

  {/* <input value={assignTo} onChange={(event) => setAssignTo(event.target.value)} type="assignTo" placeholder = "assign to..." required></input> */}
  <select id = "assignTo" name = "assignTo" value = {assignTo} onChange = {(event) => setAssignTo(event.target.value)} style={{ width: '500%', height: '38px', minWidth: '10px', maxWidth: '500px' }}>
    {dropdownOptions}
    </select> 
</div>

<div class="question form-group">
  <label for="repeat"> due in: </label>
  <select id="repetition" name="repeat" value={repeat} onChange={(event) => setRepeat(event.target.value)} style={{ width: '500%', height: '38px', minWidth: '10px', maxWidth: '500px' }}>
    <option value="daily">one day</option>
    <option value="weekly">one week</option>
    <option value="biweekly">two weeks</option>
    <option value="monthly">one month</option>
  </select>
</div>
        <button type="submit" className="btn3" onClick = {handleModal}>save</button>
     </form>
     
     </div>


     <Modal show={showModal} onHide={handleModal} style={{backgroundColor: 'transparent'}}>
  <Modal.Header closeButton>
    <Modal.Title>Success</Modal.Title>
  </Modal.Header>
  <Modal.Body style={{height: '200px'}}>
   we have successfully processed your request
  </Modal.Body>
</Modal>
     </div>

     
  )
}


