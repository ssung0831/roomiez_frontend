//import React from 'react';
import React, { useState } from 'react';
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
    var table = document.createElement("table");
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
    var roomate1;
    var roomate2;
    var roomate3;
    var roomate4;
    const [dropdownOptions, setDropdownOptions] = useState([]);
    
    function getNames(){
        
        fetch('http://localhost:8080/users/${userID}/users',{
            method:'GET',
            headers:{'Content-Type': 'application/text'},
        })
        .then(data => {
            console.log(data);
            groupID = data.getGroupID();
        })
        
        // function generateTable(names){
        //     document.addEventListener("DOMContentLoaded", function() {
        //         var myTableContainer = document.getElementById("myTableContainer");
        //         var myTable = createTable(1,1, 'myTable');

        //         names.forEach((name) =>{
        //             addRow(name);
        //             console.log(name);
        //         })

        //         myTableContainer.appendChild(myTable);
                
        //     });


        // document.addEventListener('DOMContentLoaded', ()=>{
        //     const listElement = document.getElementById('showNames');
        //     const listMarkup = names.map(string => '<li>${string}</li>').join('');
        //     listElement.innerHTML = '<ul>${listMarkup}</ul>';
        // })
        // }
       

        fetch('http://localhost:8080/groups/${groupID}/users',{
            method:'GET',
            headers: {'Content-Type': 'application/json'},
        })
        .then(response => response.text())
        .then(data => {
            console.log(data);
            //var userList;
            const jsonData = JSON.parse(data);
            jsonData.users.forEach(user => {
                let myString = user.name + " \n";
                console.log(myString);
                names.push(myString);
                //addRow(myString);
            });

            

            console.log(names);
            //generateTable(names);
        })
        .then(() => {
            const options = names;
            <option value = {names}></option>
            setDropdownOptions(options);
        });
       
        
    }

    // function addRow(str) {
    //     // Get the table element by its ID
    //     var table = document.getElementById("myTable");
      
    //     // Create a new row element
    //     var newRow = document.createElement("tr");

    //     // Create a new cell element
    //     var cell = document.createElement("td");
      
    //     // Set the content for the cell using the parameter string value
    //     var text = document.createTextNode(str);
      
    //     // Append the text node to the cell
    //     cell.appendChild(text);
      
    //     // Append the cell to the new row
    //     newRow.appendChild(cell);
      
    //     // Append the new row to the table
    //     table.appendChild(newRow);
    // }

    // function createTable(rows, cols, id) {
    //     // Create a table element
    //     var table = document.createElement("table");
    //     table.setAttribute('myTable', id);
      
    //     // Create rows
    //     for (var i = 0; i < rows; i++) {
    //       var row = document.createElement("tr");
          
    //       // Create cells
    //       for (var j = 0; j < cols; j++) {
    //         var cell = document.createElement("td");
    //         var text = document.createTextNode("Row " + (i + 1) + ", Cell " + (j + 1));
    //         cell.appendChild(text);
    //         row.appendChild(cell);
    //       }
          
    //       // Add the row to the table
    //       table.appendChild(row);
    //     }
      
    //     // Add some basic styling to the table
    //     table.style.border = "1px solid black";
    //     table.style.borderCollapse = "collapse";
      
    //     return table;
    // }
  
    // // function Banner() {
    getNames();
    
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
                            <h3>Roommates:</h3>
                            <div id = "showNames">
                            {dropdownOptions}

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



//export default Banner;
