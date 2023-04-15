import React from 'react';
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import './Banner.css';
import {AiOutlinePlus} from "react-icons/ai"
import { useHistory } from 'react-router-dom';

export const Banner = () =>{
    function Box({ children, ...props }) {
        return <div {...props}>{children}</div>
    }
  
    // function Banner() {
    
        return (
            <div className = "container-fluid Banner" style = {{padding:150}}>
               <a href = "/AddTask">
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
                        <Button className = "Button" href = "/ScheduleCloseup" variant="light" style={{backgroundColor: '#eee',
                            borderRadius: 4,
                            color: '#37306B',
                            padding: 50,
                            width: 340,
                            fontSize: '20px',
                            opacity:0.8}}>Schedule</Button>
                        </p>
                    </div>
                    
                    <div className = "align-right">
                        <p>
                        <Button className = "Button" variant="light" style={{backgroundColor: '#eee',
                            borderRadius: 4,
                            color: '#37306B',
                            padding: 50,
                            width: 340,
                            fontSize: '20px',
                            opacity:0.8}}>Remove Roomate</Button>
                        </p>
                    </div>
                    
                </Container>
                    <Box className="circle2">
                    
                    </Box>
            </div>  
        );
    //}
}


//export default Banner;