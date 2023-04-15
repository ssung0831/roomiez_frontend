import {AddTask} from "./pages/AddTask";
import {Banner} from "./pages/Banner";
import { Route, Link } from "react-router-dom";
import { Routes } from 'react-router-dom';
import { ScheduleCloseup } from "./pages/ScheduleCloseup";
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

function App() {
  return (
    <div className = "App">
      <Routes     >
       <Route path="/AddTask" element={<AddTask />}/>
      <Route path="/AddTask" element={<AddTask />}/>
      <Route path="/ScheduleCloseup" element={<ScheduleCloseup />}/>
      <Route path ="/Banner" element={<Banner />}/>
      </Routes>
    </div>
  );
}


export default App;