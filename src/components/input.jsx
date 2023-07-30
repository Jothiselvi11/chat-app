import React from "react";

const input=()=>{
   return (
    <div className="inputs">
    <input type="text" placeholder="Type something...."/>
    <div className="send">
    <img src="a" alt="a"/>
    <input type="file" style={{display:"none"}} id="file"/>
    <label htmlFor="file">
        <img src="a" alt="a"/>
    </label>
<button>Send</button>
    </div>


    </div>
   )
}



export default input;