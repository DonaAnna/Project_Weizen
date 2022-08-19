import Sidebar from "./components/sidebar/sidebar";
import Topbar from "./components/topbar/topbar";
import React from "react";
import "./app.css";
import Home from "./components/pages/home/Home";
import{
    BrowserRouter,
    Routes,
    Route,
  }from 'react-router-dom';
import UserList from "./components/pages/UserList/UserList";

function App(){
    return (
        <BrowserRouter>
        <Topbar/>
        <div className="container"><Sidebar/>
        <Routes>
       <Route path='/' element={<Home/>}/>
        
        <Route path='/users' element={<UserList/>}/>      
       </Routes>    
       </div>
       </BrowserRouter>
       );
}

export default App;