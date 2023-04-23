import {AddTask} from "./pages/AddTask";
import {Banner} from "./pages/Banner";
import { Route, Link } from "react-router-dom";
import { Routes } from 'react-router-dom';
import { ScheduleCloseup } from "./pages/ScheduleCloseup";
import {Login} from "./pages/Login";
import {Register} from "./pages/Register";
import {Schedule} from "./pages/Schedule";
import {ScheduleGuest} from "./pages/ScheduleGuest";
import {JoinGroup} from "./pages/JoinGroup";
import {Remove} from "./pages/Remove";
import {Landing} from "./pages/Landing";
import 'bootstrap/dist/css/bootstrap.min.css';


import './App.css';

function App() {
  return (
    <div className = "App">
      <Routes     >
       <Route path="/AddTask" element={<AddTask />}/>
      <Route path="/AddTask" element={<AddTask />}/>
      <Route path="/ScheduleCloseup/:taskID" element={<ScheduleCloseup />}/>
      <Route path = "/Login" element = {<Login />} />
      <Route path = "/" element = {<Landing />} />
      <Route path = "/Register" element = {<Register />} />
      <Route path = "/Schedule" element = {<Schedule />} />
      <Route path = "/ScheduleGuest" element = {<ScheduleGuest />} />
      <Route path = "/JoinGroup" element = {<JoinGroup />} />
      <Route path = "/Banner" element = {<Banner />} />
      <Route path = "/Remove" element = {<Remove />} />
      </Routes>
    </div>
  );
}


export default App;