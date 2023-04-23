import React, { useState } from 'react';
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import './Banner.css';
import {AiOutlinePlus} from "react-icons/ai"


//npm i react-bootstrap

export const Banner = () =>{
    // function Box({ children, ...props }) {
    //     return <div {...props}>{children}</div>
    // }

    var loggedIn = false;
    var userId = "-1";
    
    const [userID, setUserID] = useState(null);

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
            //call function to create navbar
            //createNav();
        }

        //track cookie
        console.log(loggedIn);
        console.log(userId);
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

    let names = [];
    const [groupID, setGroupID] = useState('');
    const [groupName, setGroupName] = useState('');

    const [dropdownOptions, setDropdownOptions] = useState(['', '', '', '']);
    console.log("HERE" + document.cookie);

 //   function getNames(){
        
        fetch(`http://roomieztestnv-env.eba-s98dmkpn.us-east-1.elasticbeanstalk.com/user/` + userID,{
            method:'GET',
            headers:{'Content-Type': 'application/json'},
        })
        .then(response => response.json())
        .then(data => {
            console.log(userID);
          //  groupID = data.groupID;
          setGroupID(data.groupID);
            console.log(groupID);

            fetch(`http://roomieztestnv-env.eba-s98dmkpn.us-east-1.elasticbeanstalk.com/groups/${groupID}/users`,{
            method:'GET',
            headers: {'Content-Type': 'application/json'},
        })
        .then(response => response.text())
        .then(data => {
            console.log(data);
         //   console.log(`http://localhost:8080/groups/3/users`);
            //var userList;
            const jsonData = JSON.parse(data);
            jsonData.users.forEach(user => {
                let myString = user.name;
                console.log(myString);
                names.push(myString);
            });

            console.log(names);
        })
        .then(() => {
            const options = names;
            
            if(groupID != 0){
            setDropdownOptions(options);
            }
        })
        .then(() => {
            fetch(`http://roomieztestnv-env.eba-s98dmkpn.us-east-1.elasticbeanstalk.com/groups/${groupID}`,{
                method:'GET',
                headers: {'Content-Type': 'application/json'},
            })
            .then(response => response.text())
            .then(data => {
                console.log("testi" + data);
                const parsedData = JSON.parse(data);
                const gn = parsedData.groupName;
                console.log("hi" + gn);
                setGroupName(gn);
            });
        })

            console.log("groupID: " + groupID);
        })
       
  //  }

    // // function Banner() {
    // getNames();
    
       return (
            <div className = "container-fluid Banner" style = {{padding:150}}>
               <a href = "/JoinGroup">
                <AiOutlinePlus className = "plus" style = {{display: 'flex', color:'#eee', fontSize: '60px'}}/>
                </a>
                
                <div style = {{padding:70}}>
                </div>
                <Container>
                    <div className = "align-right">
                        <p>
                        <Button className = "Button" href = "/AddTask" variant="light" style={{backgroundColor: '#eee',
                        borderRadius: 4,
                        color: '#37306B',
                        padding: 50,
                        width: 340,
                        fontSize: '20px',
                        opacity:0.8}}>Add Task</Button>
                        </p>
                    
                    </div>

                    <div className = "align-right">
                        <p>
                        <Button className = "Button" href = "/Schedule" variant="light" style={{backgroundColor: '#eee',
                            borderRadius: 4,
                            color: '#37306B',
                            padding: 50,
                            width: 340,
                            fontSize: '20px',
                            opacity:0.8}}>Schedule</Button>
                        </p>
                    </div>
    
                    <div className = "flexing" >
                        
                        <div className = "Roomates" id = "Roomates">
                            <h3>{groupName} Roommates:</h3>
                            <div id = "showNames">
                            {dropdownOptions.map((option, index) => (
                                <option key={index} value={option}>
                                {option}
                                </option>
                            ))}

                            </div>
                        </div>
                        
                        <div >
                            <p>
                            <Button className = "Button" href = "/Remove" variant="light" style={{backgroundColor: '#eee',
                                borderRadius: 4,
                                color: '#37306B',
                                padding: 50,
                                width: 340,
                                fontSize: '20px',
                                opacity:0.8}}>Remove Roomate</Button>
                            </p>
                        </div>
                    </div>
             
                </Container>
                    {/* <Box className="circle2">
                    
                    </Box> */}
                    
            </div>  
     
       );
    }
