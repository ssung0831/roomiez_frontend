import React , { useRef , useState } from 'react';
// import { Component } from 'react';
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
var userId = 1;

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

  // const uniqueCode = generateUniqueCode();
  const codeRef = useRef(null);
  const [copied, setCopied] = useState(false);
  const [copied2, setCopied2] = useState(false);
  const [copied3, setCopied3] = useState(false);
  const [uniqueCode] = useState(generateUniqueCode());


  const [groupName, setGroupName] = useState('');
  const [groupName2, setGroupName2] = useState('');

//get groupID based on group name

// function getGroupID({groupName}) {
//   fetch(`http://localhost:8080/groups?groupName=${groupName}`, {
//         method:'GET',
//         mode: 'cors',
//         headers: { 'Content-Type': 'application/json'},
//   })
//   .then(response => response.json()) 
//   .then(data => {
//     const groupId = data[0].groupID;
//     console.log(`group ID: ${groupId}`);
//     return groupId;
//   });
// }

function assignGroupID({ groupId }) {
  console.log(`group id from assign group id: ${groupId}`);
  fetch(`http://localhost:8080/user/${userId}/setGroup?groupID=${groupId}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ GroupID: groupId })
          })
          .then(response => {
            //console.log(response);
            if (response.status===200) {
              // group created successfully
              console.log("Group created successfully:", response.json());
              // return response.json();
            } else {
              // handle error
              console.log("Failed to create group:", response.status);
              throw new Error('Failed to create group');
            }
    })
          //   .then(response => response.json())
          //   .then(data => {
          //     console.log('User group updated successfully');
          // })
          //   .catch(error => {
          //     console.error('Error updating user group:', error);
          // });

}

function assignGroupID2({ groupId2 }) {
  console.log(`group id from assign group id: ${groupId2}`);
  fetch(`http://localhost:8080/user/${userId}/setGroup?groupID=${groupId2}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ GroupID: groupId2 })
          })
          .then(response => {
            //console.log(response);
            if (response.status===200) {
              // group created successfully
              console.log("Group created successfully:", response.json());
              // return response.json();
            } else {
              // handle error
              console.log("Failed to create group:", response.status);
              throw new Error('Failed to create group');
            }
    })
          //   .then(response => response.json())
          //   .then(data => {
          //     console.log('User group updated successfully');
          // })
          //   .catch(error => {
          //     console.error('Error updating user group:', error);
          // });

}

function getGroupID({ groupName }) {
  console.log('hey');
  console.log(groupName);
  console.log('hey from getGroupId function' + groupName);
  return new Promise((resolve, reject) => {
    fetch(`http://localhost:8080/groups?groupName=${groupName}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })
      .then(response => response.json())
      .then(data => {
        const groupId = data[0].groupID;
        console.log(`group ID: ${groupId}`);
        resolve(groupId);
      })
      .catch(error => {
        reject(error);
      });
  });
}

function getGroupID2({ groupName2 }) {
  console.log('hey');
  console.log(groupName2);
  console.log('hey from getGroupId function' + groupName2);
  return new Promise((resolve, reject) => {
    fetch(`http://localhost:8080/groups?groupName=${groupName2}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })
      .then(response => response.json())
      .then(data => {
        const groupId2 = data[0].groupID;
        console.log(`group ID: ${groupId2}`);
        resolve(groupId2);
      })
      .catch(error => {
        reject(error);
      });
  });
}

 
//create group
  function handleCreateGroup(event) {
    event.preventDefault();
    const groupName = event.target.elements.groupName.value;
    console.log("groupName:", groupName);

    const body = JSON.stringify({
      groupName: groupName
    });
    console.log(body);
  
    fetch('http://localhost:8080/groups', {
      method: 'POST',
      // mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json'
      },
      // body:JSON.stringify({
      //   groupName: groupName
      // })
      body: body
    })
      .then(response => {
        //console.log(response);
        if (response.status===201) {
          // group created successfully
          console.log("Group created successfully:", response.json());
          // return response.json();
        } else {
          // handle error
          console.log("Failed to create group:", response.status);
          throw new Error('Failed to create group');
        }
      })
      .then(data => {
        // do something with the response data, like display a success message
        console.log(data);
        console.log(`group name: ${groupName}`);
        getGroupID({ groupName })
        .then(groupId => {
          // Do something with the groupId here
          console.log(`group ID: ${groupId}`);
          console.log(`user ID: ${userId}`);
          assignGroupID({ groupId });
          console.log('success!');
          
          // fetch(`http://localhost:8080/users/${userId}/setGroup`, {
          //   method: 'PUT',
          //   headers: {
          //     'Content-Type': 'application/json'
          //   },
          //   body: JSON.stringify({ groupId })
          // })
          //   .then(response => response.json())
          //   .then(data => {
          //     console.log('User group updated successfully');
          // })
          //   .catch(error => {
          //     console.error('Error updating user group:', error);
          // });
        })
        .catch(error => {
          // Handle the error here
          console.error(error);
        });

        // const groupID = getGroupID({ groupName });
        // console.log(`group ID: ${groupID}`);
        // fetch(`http://localhost:8080/users/${userId}/updateGroup`, {
        //   method: 'PUT',
        //   mode: 'cors',
        //   headers: {
        //     'Content-Type': 'application/json'
        //   },
        //   body: JSON.stringify({ groupID })
        // })
        //   .then(response => response.json())
        //   .then(data => {
        //     console.log('User group updated successfully');
        //   })
        //   .catch(error => {
        //     console.error('Error updating user group:', error);
        //   });
        
      })
      .catch(error => {
        // handle error
        console.error(error);
      });



      //updating user info
      

      // fetch(`http://localhost:8080/groups?groupName=${groupName}`, {
      //   method:'GET',
      //   headers: { 'Content-Type': 'application/json'},
      // })
      // .then(response => response.json()) 
      // .then(response => {
      //   console.log(response);
      //   if (response.status===302) {
      //     // group found
      //     console.log("Group found:", response.json());
      //     // return response.json();
      //     // return response.json().then(data => {
      //     //   console.log('Group found:', data);
      //     //   return data;
      //     // });

      //   } else {
      //     // handle error
      //     console.log("Failed to find group:", response.status);
      //     throw new Error('Failed to find group');
      //   }
      // })
      // .then(data => {
      //   // console.log(response);
      //   const groupId = data.groupID;
      //   console.log(`group ID: ${groupId}`);

      // // Then, use the retrieved group ID to make a PUT request to update the user's group
      //   fetch(`http://localhost:8080/users/${userId}/updateGroup`, {
      //     method: 'PUT',
      //     headers: {
      //       'Content-Type': 'application/json'
      //     },
      //     body: JSON.stringify({ groupId })
      //   })
      //     .then(response => response.json())
      //     .then(data => {
      //       console.log('User group updated successfully');
      //     })
      //     .catch(error => {
      //       console.error('Error updating user group:', error);
      //     });
      // })
      // .catch(error => {
      //   console.error('Error retrieving group ID:', error);
      // });  
    //}


    //join group

    }

    function handleJoinGroup(event) {
      event.preventDefault();
      const groupName2 = event.target.elements.groupName2.value;
      console.log(groupName2);
      getGroupID2({ groupName2 })
      .then(groupId2 => {
        // Do something with the groupId here
        console.log(`group ID: ${groupId2}`);
        console.log(`user ID: ${userId}`);
        assignGroupID2({ groupId2 });
        console.log('success!');
        
        // fetch(`http://localhost:8080/users/${userId}/setGroup`, {
        //   method: 'PUT',
        //   headers: {
        //     'Content-Type': 'application/json'
        //   },
        //   body: JSON.stringify({ groupId })
        // })
        //   .then(response => response.json())
        //   .then(data => {
        //     console.log('User group updated successfully');
        // })
        //   .catch(error => {
        //     console.error('Error updating user group:', error);
        // });
      })
      .catch(error => {
        // Handle the error here
        console.error(error);
      });

      
  
     //updating user info

  
    //     fetch(`http://localhost:8080/groups?groupName=${groupName}`)
    //     .then(response => response.json())
    //     .then(data => {
    //       const groupId = data.id;
  
    //     // Then, use the retrieved group ID to make a PUT request to update the user's group
    //     fetch(`http://localhost:8080/users/${userId}/updateGroup`, {
    //       method: 'PUT',
    //       headers: {
    //         'Content-Type': 'application/json'
    //       },
    //       body: JSON.stringify({ groupId })
    //     })
    //       .then(response => response.json())
    //       .then(data => {
    //         console.log('User group updated successfully');
    //       })
    //       .catch(error => {
    //         console.error('Error updating user group:', error);
    //       });
    //     })
    //     .catch(error => {
    //       console.error('Error retrieving group ID:', error);
    //     });  
    }
      

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
                <input className="code" name="groupName" value={groupName} type="group" onChange={(e) => setGroupName(e.target.value)}/>
              </label>
              <Button className="buttonJoinGroup" type="submit" onClick={() => {
              navigator.clipboard.writeText(codeRef.current.innerText);
              setCopied2(true);
               }} >create group</Button>
               {copied2 && <div className="message">group created!</div>}
            </form>                                                             
            
          </Box>

          <Box className="code-boxes1">
            Join Group
            <form className='joingroupform' onSubmit={handleJoinGroup}>
              <label>
                <input className="code" name="groupName2" value={groupName2} type="groupName" onChange={(e) => setGroupName2(e.target.value)} />
              </label>
              <Button className="buttonJoinGroup" type="submit" onClick={() => {
              navigator.clipboard.writeText(codeRef.current.innerText);
              setCopied3(true);
               }} >join group</Button>
               {copied3 && <div className="message">group joined!</div>}
            </form>

        </Box>  
        </div>
    
        <Box className="circle2"></Box>  
    </div>
    

    );
  


      }
