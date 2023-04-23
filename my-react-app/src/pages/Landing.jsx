//import React from 'react';
import React, { useState } from 'react';
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
// import './Landing.css';
import {AiOutlinePlus} from "react-icons/ai"


//npm i react-bootstrap

export const Landing = () =>{

    const [dropdownOptions, setDropdownOptions] = useState(['Option 1', 'Option 2', 'Option 3', 'Option 4']);
    
    function getTask(){
        
        // read in from tyler's addTask button
       
    }

   
    
  
    // // function Banner() {
    getTask();
    
       return (
        // <div className="landing_page">
            // <a href="/Login">Login</a>
            // <a href="/Register">Sign Up</a>

            <div className = "container-fluid Landing" style = {{padding:0}}>

                    <a href="/Login">Login</a>
                    <a href="/Register">Sign Up</a>
                
                
                {/* </div>AiOutlinePlus className = "plus" style = {{display: 'flex', color:'#eee', fontSize: '60px'}}/> */}
         
                
                <div style = {{padding:70}}>
                </div>
                <Container>
                    {/* <div className = "align-right">
                        <p>
                        <Button className = "Button" href = "" variant="light" style={{backgroundColor: '#eee',
                        borderRadius: 4,
                        color: '#37306B',
                        padding: 50,
                        width: 340,
                        fontSize: '20px',
                        opacity:0.8}}>Add Task</Button>
                        </p>
                    
                    </div> */}

                    <div className = "align-right">
                        <p>
                        <Button className = "Button" href = "/ScheduleGuest" variant="light" style={{backgroundColor: '#eee',
                            borderRadius: 4,
                            color: '#37306B',
                            padding: 50,
                            width: 340,
                            fontSize: '20px',
                            opacity:0.8}}>Schedule</Button>
                        </p>
                    </div>


                </Container>
                    {/* <Box className="circle2">
                    
                    </Box> */}
                    
            </div>  

        // </div>
            

            
       );
    }

