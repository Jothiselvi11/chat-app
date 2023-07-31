import React, { useState } from "react";
import { useNavigate,Link } from "react-router-dom";
import {  signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";




const Login = ()=>{
    const [err, setErr] = useState(false);
    const navigate = useNavigate();
  
    const handleSubmit = async (e) => {
      
      e.preventDefault();
      const email = e.target[0].value;
      const password = e.target[1].value;

  
      
            try {
              await  signInWithEmailAndPassword(auth, email, password) ;
              navigate("/") 
            
      } catch (err) {
        setErr(true);
        
      }
    };
    return (
        <div className="formContainer">
        <div className="formWrapper">
        <span className="logo">JoJe Chat</span>
        <span className="title">Login</span>
         <form className="rform">
            <input type="email" placeholder="email"/> 
            <input type="password" placeholder="password"/> 
            <button onSubmit={handleSubmit}>Sign In</button>
            {err && <span>something went wrong</span>}
         </form>
         <p>New user <Link to="/register"> Register</Link></p>
        </div>

        </div>
    )

}

export default Login;