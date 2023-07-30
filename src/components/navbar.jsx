import React from "react";
import pic from "../img/pic.jpeg"
const navBar=()=>{
    return <div className="navbar">
        <span className="logo">JoJe chat</span>
        <div className="user">
            <img src="https://images.pexels.com/photos/17042221/pexels-photo-17042221/free-photo-of-young-woman-in-eyeglasses-standing-on-a-basketball-court.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>
            <span>Jothi</span>
            <button>logOut</button>
            
        </div>
        
    </div>
    
}



export default navBar