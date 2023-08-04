import React, { useState } from "react";
import { useNavigate,Link } from "react-router-dom";
import {  signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
// import {toast} from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import  { Toaster } from 'react-hot-toast';
// toast.configure();



const Login = ()=>{
    const [err, setErr] = useState(false);
    const [email1,efunc]=useState();
    const [password1,pfunc]=useState();
       const navigate = useNavigate(); 
  
    const handleSubmit = async () => {
      
      //e.preventDefault();
      const email = email1;
      const password = password1;
              await  signInWithEmailAndPassword(auth, email, password).then((e) => {
                 navigate("/")
                //  toast("hi")
              }).catch((e) => {
                 alert(e)
                
              }) ;
             
            
     
     
    };
    return (
        <div className="formContainer">
       
        <div className="formWrapper">
        <span className="logo">JoJe Chat</span>
        <span className="title">Login</span>
         <div className="rform">
            <input type="email"  placeholder="email"  onChange={(e) => {
              efunc(e.target.value)} }
              /> 
            <input type="password" placeholder="password" onChange={(e) => {
              pfunc(e.target.value)} }/> 
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