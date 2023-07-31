import React, { useContext } from "react";
import pic from "../img/pic.jpeg"
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { AuthContext } from "../context/AuthContent";

const NavBar1 = () => {
    const { currentUser } = useContext(AuthContext)
    return (
  
            <div className="navbar">
                <span className="logo">JoJe chat</span>
                <div className="user">
                    <img src={currentUser.photoURL} alt=""/>
                    <span>{currentUser.displayName}</span>
                    <button onClick={()=>signOut(auth)} >logOut</button>
            </div>
    </div>
   
    );
}



export default NavBar1