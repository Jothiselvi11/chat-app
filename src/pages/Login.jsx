import React, { useState } from "react";
import { useNavigate,Link } from "react-router-dom";
import {  signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import toast, { Toaster } from 'react-hot-toast';


const Login = ()=>{
    const [err, setErr] = useState(false);
    const navigate = useNavigate(); 
  
    const handleSubmit = async () => {
      
      // e.preventDefault();
      const email = "asirwaadj@gmail.com";
      const password = "Prakash475!";

  
      
          
              await  signInWithEmailAndPassword(auth, email, password).then((e) => {
                 navigate("/")
              }).catch((e) => {
                alert(e)
                // toast.error(e)
              }) ;
             
            
     
     
    };
    return (
        <div className="formContainer">
       
        <div className="formWrapper">
        <span className="logo">JoJe Chat</span>
        <span className="title">Login</span>
         <div className="rform">
            <input type="email"  placeholder="email"/> 
            <input type="password" placeholder="password"/> 
            <button onClick={handleSubmit}>Sign In</button>
            {err && <span>something went wrong</span>}
         </div>
         <p>New user <Link to="/register"> Register</Link></p>
        </div>
        {/* <Toaster/> */}
        </div>
    )

}

export default Login;