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
  
    const handleSubmit = async (e) => {
      setLoading(true);
      e.preventDefault();
      const displayName = e.target[0].value;
      const email = e.target[1].value;
      const password = e.target[2].value;
      const file = e.target[3].files[0];
  
      try {
        //Create user
        const res = await createUserWithEmailAndPassword(auth, email, password);
  
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
            <input type="text" placeholder="username" autoComplete="on"/> 
            
            <input type="email" placeholder="email" autoComplete="off"/> 
            <input type="password" placeholder="password" autoComplete="off"/> 
            <input style={{display:"none"}}type="file" id="file"/ > 
            <label htmlFor="file">
            {/* <img src={InboxIcon} alt="avatar"/> */}
            <MdOutlineAddPhotoAlternate size={30} />
        <span>add your avatar</span>
        </label>
            <button onSubmit={handleSubmit}>Sign Up</button>
            {err && <span>something went wrong</span>}
         </form>
         <p>Already have a account <Link to="/login">Login</Link></p>
        </div>

        </div>
    )

}

export default Register;