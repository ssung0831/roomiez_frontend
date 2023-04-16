import {AddTask} from "./pages/AddTask";
import { Route, Link } from "react-router-dom";
import { Routes } from 'react-router-dom';
import { ScheduleCloseup } from "./pages/ScheduleCloseup";
import { Login} from "./pages/Login";
import { Register} from "./pages/Register";


function App() {
  return (
    <div className = "App">
      <Routes     >
       <Route path="/AddTask" element={<AddTask />}/>
      <Route path="/AddTask" element={<AddTask />}/>
      <Route path="/ScheduleCloseup" element={<ScheduleCloseup />}/>
      <Route path="/Login" element={<Login />}/>
      <Route path="/Register" element={<Register />}/>
      </Routes>
    </div>
  );
}

export default App;