import React from "react";
import ContactEmergencyIcon from '@mui/icons-material/ContactEmergency';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import InboxIcon from '@mui/icons-material/Inbox';
import {MdOutlineAddPhotoAlternate} from 'react-icons/md'

function Register(){
    return (
        <div className="formContainer">
        <div className="formWrapper">
        <span className="logo">JoJe Chat</span>
        <span className="title">Register</span>
         <form className="rform">
            <input type="text" placeholder="username"/> 
            <input type="password" placeholder="password"/> 
            <input type="email" placeholder="email"/> 
            <input style={{display:"none"}}type="file" id="file"/ > 
            <label htmlFor="file">
            {/* <img src={InboxIcon} alt="avatar"/> */}
            <MdOutlineAddPhotoAlternate size={30} />
        <span>add your avatar</span>
        </label>
            <button>Sign Up</button>
         </form>
         <p>Already have a account Login</p>
        </div>

        </div>
    )

}

export default Register;