import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../scenes/login/Login"
import Calendar from "../scenes/calendar/calendar";
import GanttChart from "../scenes/gantt/gantt";
import Profile from "../scenes/profile/profile";
/*import Form from "./scenes/dashboard/form";
import Notifications from "./scenes/dashboard/notifications";
import Profile from "./scenes/dashboard/profile";
import Sumary from "./scenes/dashboard/summary";*/
import Tasks from "../scenes/tasks/tasks";

function AppRouter(){
    return(
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/calendar" element={<Calendar/>}/>
            <Route path="/tasks" element={<Tasks/>}/>
            <Route path="/gantt" element={<GanttChart/>}/>
            <Route path="/profile" element={<Profile/>}/>
        </Routes>
    );
};

export default AppRouter;