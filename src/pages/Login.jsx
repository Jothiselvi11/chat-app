import React from "react";
import ContactEmergencyIcon from '@mui/icons-material/ContactEmergency';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import InboxIcon from '@mui/icons-material/Inbox';


const Login = ()=>{
    return (
        <div className="formContainer">
        <div className="formWrapper">
        <span className="logo">JoJe Chat</span>
        <span className="title">Login</span>
         <form className="rform">
            <input type="text" placeholder="username"/> 
            <input type="password" placeholder="password"/> 
            <button>Sign In</button>
         </form>
         <p>New user  Register</p>
        </div>

        </div>
    )

}

export default Login;