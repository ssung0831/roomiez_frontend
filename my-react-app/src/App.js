import {AddTask} from "./pages/AddTask";
import {Banner} from "./pages/Banner";
import { Route, Link } from "react-router-dom";
import { Routes } from 'react-router-dom';
import { ScheduleCloseup } from "./pages/ScheduleCloseup";
import {Login} from "./pages/Login";
import {Register} from "./pages/Register";
import {Schedule} from "./pages/Schedule";
import {joingroup} from "./pages/joingroup";
import 'bootstrap/dist/css/bootstrap.min.css';


import './App.css';

function App() {
  return (
    <div className = "App">
      <Routes     >
       <Route path="/AddTask" element={<AddTask />}/>
      <Route path="/AddTask" element={<AddTask />}/>
      <Route path="/ScheduleCloseup" element={<ScheduleCloseup />}/>
      <Route path = "/Login" element = {<Login />} />
      <Route path = "/Register" element = {<Register />} />
      <Route path = "/Banner" element = {<Banner />} />
      <Route path = "/Schedule" element = {<Schedule />} />
      <Route path = "/joingroup" element = {<joingroup />} />
      </Routes>
    </div>
  );
}


export default App;