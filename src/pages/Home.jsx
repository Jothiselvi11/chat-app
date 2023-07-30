import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/navbar";
import Chat from "../components/chat";

function Home(){
    return <div className="home">
        <div className="container">
         <Sidebar/>
         <Chat/>

        </div>
    </div>
}

export default Home;