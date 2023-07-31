import React from "react";

import AttachFileIcon from '@mui/icons-material/AttachFile';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';

const input=()=>{
   return (
    <div className="inputs">
    <input type="text" placeholder="Type something...."/>
    <div className="send">
    <AttachFileIcon/>
    <input type="file" style={{display:"none"}} id="file"/>
    <label htmlFor="file">
        <AddPhotoAlternateIcon/>
    </label>
<button>Send</button>
    </div>


    </div>
   )
}



export default input;