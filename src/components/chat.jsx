import React from "react";
import Messages from "./messages";
import Input from "./input"
const chat=()=>{
    return <div className="chat">
        <div className="chatinfo">
            <span>Jothi</span>
            <div className="chaticons">
            <img src="" alt=" "/>
            <img src="" alt=" "/>
            <img src="" alt=" "/>

            </div>
        </div>
        <div className="messagediv">
        <Messages/>
        </div>
        <div className="inputdiv">
            <Input/>
        </div>

    </div>
}



export default chat