import React , { useRef , useState } from 'react';
import { Component } from 'react';
import { FaHouseUser} from 'react-icons/fa';
import Button from 'react-bootstrap/Button'

import './JoinGroup.css';
//import circle from './circle.png';
//import background from "./background.png";


function Box({ children, ...props }) {
  return <div {...props}>{children}</div>
}

function generateUniqueCode() {
  const uniqueCode = Math.random().toString(36).substring(2, 8);
  return uniqueCode;
}


export const JoinGroup = () => {

//cookie stuff
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

  const uniqueCode = generateUniqueCode();
  const codeRef = useRef(null);
  const [copied, setCopied] = useState(false);




//get groupID based on group name

 
//create group
  function handleCreateGroup(event) {
    event.preventDefault();
    const groupName = event.target.elements.groupName.value;
    console.log("groupName:", groupName);
  
    fetch('http://localhost:8080/group/addGroup', {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        group: groupName
      })
    })
      .then(response => {
        if (response.ok) {
          // group created successfully
          console.log("Group created successfully:", response.json());
          return response.json();
        } else {
          // handle error
          console.log("Failed to create group:", response.statusText);
          throw new Error('Failed to create group');
        }
      })
      .then(data => {
        // do something with the response data, like display a success message
        console.log(data);
      })
      .catch(error => {
        // handle error
        console.error(error);
      });

      //updating user info

      fetch(`http://localhost:8080/groups?groupName=${groupName}`)
      .then(response => response.json())
      .then(data => {
        const groupId = data.id;

      // Then, use the retrieved group ID to make a PUT request to update the user's group
      fetch(`http://localhost:8080/users/${userId}/updateGroup`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ groupId })
      })
        .then(response => response.json())
        .then(data => {
          console.log('User group updated successfully');
        })
        .catch(error => {
          console.error('Error updating user group:', error);
        });
      })
      .catch(error => {
        console.error('Error retrieving group ID:', error);
      });  
      }


    //join group
    function handleJoinGroup(event) {
      event.preventDefault();
      const groupName = event.target.elements.groupName.value;
  
        //updating user info
  
        fetch(`http://localhost:8080/groups?groupName=${groupName}`)
        .then(response => response.json())
        .then(data => {
          const groupId = data.id;
  
        // Then, use the retrieved group ID to make a PUT request to update the user's group
        fetch(`http://localhost:8080/users/${userId}/updateGroup`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ groupId })
        })
          .then(response => response.json())
          .then(data => {
            console.log('User group updated successfully');
          })
          .catch(error => {
            console.error('Error updating user group:', error);
          });
        })
        .catch(error => {
          console.error('Error retrieving group ID:', error);
        });  
      }


      const [groupName, setGroupName] = useState('');

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
            <div ref={codeRef}>
                <h2 className="codeFormat">{uniqueCode}</h2>
            </div> 
            <Button className="buttonJoinGroup" onClick={() => {
              navigator.clipboard.writeText(codeRef.current.innerText);
              setCopied(true);
            }}>copy to clipboard</Button>
            {copied && <div className="message">copied to clipboard!</div>}
          </Box> 

          <Box className="code-boxes1">
            Create Group
            <form className='joingroupform' onSubmit={handleCreateGroup}>
              <label>
                <input /*type="text"*/ code="code" name="groupName" value={groupName} type="group" onChange={(e) => setGroupName(e.target.value)}/>
              </label>
              <Button className="buttonJoinGroup" type="submit" >create group</Button>
            </form>                                                             
            
          </Box>

          <Box className="code-boxes1">
            Join Group
            <form className='joingroupform'>
              <label>
                <input type="text" code="code" />
              </label>
            </form>
            <Button className="buttonJoinGroup" onClick={handleJoinGroup}>join</Button>
        </Box> 
        </div>
    
        <Box className="circle2"></Box>  
    </div>
    

    );
  


}
