import React from "react";
import Navbar from "../components/navbar";
import Search from "./search" ;
import Chats from "./chats";
const sideBar=()=>{
    return <div className="sidebar">
        <Navbar/>
        <Search/>
        <Chats/>
    </div>
}



export default sideBar