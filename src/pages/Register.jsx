import React, { useState } from "react";
import {MdOutlineAddPhotoAlternate} from 'react-icons/md';
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import {auth,storage,db} from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useNavigate,Link } from "react-router-dom";
import { doc, setDoc } from "firebase/firestore";


const Register = () => {
    const [err, setErr] = useState(false);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email1, setEmail] = useState("");
    const [password1, setPassword] = useState("");

  
    const handleSubmit = async (e) => {
      console.log("yes")
      setLoading(true);
      e.preventDefault();
      const displayName = name;
      const email = email1;
      const password = password1;
      const file = null;
  
      try {
        //Create user
        const res = await createUserWithEmailAndPassword(auth, email, password).catch((err) => {
          console.log(err)
        });
  
        //Create a unique image name
        const date = new Date().getTime();
        const storageRef = ref(storage, `${displayName + date}`);
  
        await uploadBytesResumable(storageRef, file).then(() => {
          getDownloadURL(storageRef).then(async (downloadURL) => {
            try {
              //Update profile
              await updateProfile(res.user, {
                displayName,
                photoURL: downloadURL,
              });
              //create user on firestore
              await setDoc(doc(db, "users", res.user.uid), {
                uid: res.user.uid,
                displayName,
                email,
                photoURL: downloadURL,
              });
              //create empty user chats on firestore
              await setDoc(doc(db, "userChats", res.user.uid), {});
              navigate("/");
            } catch (err) {
              alert(err)
              console.log(err);
              setErr(true);
              setLoading(false);
            }
          });
        });
      } catch (err) {
        setErr(true);
        setLoading(false);
      }
    };
    return (
        <div className="formContainer">
        <div className="formWrapper">
        <span className="logo">JoJe Chat</span>
        <span className="title">Register</span>
         <form className="rform">
            <input type="text" placeholder="username" onChange={(e) => {
              setName(e.target.value)
            }}  autoComplete="on"/> 
            
            <input type="email" onChange={(e) => {
              setEmail(e.target.value)
            }} placeholder="email" autoComplete="off"/> 
            <input type="password" onChange={(e) => {
              setPassword(e.target.value)
            }} placeholder="password" autoComplete="off"/> 
            <input style={{display:"none"}}type="file" id="file"/ > 
            <label htmlFor="file">
            {/* <img src={InboxIcon} alt="avatar"/> */}
            <MdOutlineAddPhotoAlternate size={30} />
        <span>add your avatar</span>
        </label>
            <button onClick={handleSubmit}>Sign Up</button>
            {err && <span>something went wrong</span>}
         </form>
         <p>Already have a account <Link to="/login">Login</Link></p>
        </div>
        </div>
    )

}

export default Register;