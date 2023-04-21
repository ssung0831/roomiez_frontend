import React from 'react';
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import './Banner.css';
import {AiOutlinePlus} from "react-icons/ai"
//import { useHistory } from 'react-router-dom';

//npm i react-bootstrap

export const Banner = () =>{
    // function Box({ children, ...props }) {
    //     return <div {...props}>{children}</div>
    // }

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
            //call function to create navbar
            //createNav();
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

    let names = [];
    let groupID = "";
    //'http://localhost:8080/users/${userID}/users'

    // function getNames(){
        
    //     fetch('http://localhost:8080/users/${userID}/users',{
    //         method:'GET',
    //         headers:{'Content-Type': 'application/text'},
    //     })
    //     .then(data => {
    //         console.log(data);
    //         groupID = data.getGroupID();
    //     })
        

    //     fetch('http://localhost:8080/groups/${groupID}/users',{
    //         method:'GET',
    //         headers: {'Content-Type': 'application/text'},
    //     })
    //     .then(response => response.text())
    //     .then(data => {
    //         console.log(data);

    //         data.users.forEach(user => {
    //             let myString = user;
    //             let delimiter = ", ";
    //             let test = myString.split(delimiter);
    //             names.push(test);
    //         });
    //         console.log(names);
    //     });
        
    // }
  
    // // function Banner() {
    // getNames();
       return (
            <div className = "container-fluid Banner" style = {{padding:150}}>
               <a href = "/JoinGroup">
                <AiOutlinePlus className = "plus" style = {{display: 'flex', color:'#eee', fontSize: '60px'}}/>
                </a>
                
                <div style = {{padding:50}}>
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
                        <div className = "Roomates">
                            <h3>Roomates:</h3>
                            <h4>- Marco Papa</h4>
                            <h4>- Aaron Cote</h4>
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



//export default Banner;
