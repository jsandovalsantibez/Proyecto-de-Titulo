import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../scenes/login/Login"
/*import Calendar from "./scenes/dashboard/calendar";
import Form from "./scenes/dashboard/form";
import Gantt from "./scenes/dashboard/gantt";
import Notifications from "./scenes/dashboard/notifications";
import Profile from "./scenes/dashboard/profile";
import Sumary from "./scenes/dashboard/summary";
import Task from "./scenes/dashboard/tasks";*/

function AppRouter(){
    return(
        <Routes>
            <Route path="/" element={<Login/>}/>
        </Routes>
    );
};

export default AppRouter;