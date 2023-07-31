import React from "react";
import Messages from "./messages";
import Input from "./input";
import VideoCallIcon from '@mui/icons-material/VideoCall';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import MdAddCall from 'react-icons/md';

const chat=()=>{
    return <div className="chat">
        <div className="chatinfo">
            <span>Jothi</span>
            <div className="chaticons">
            <VideoCallIcon/>
            <AddIcCallIcon />
            <MoreVertIcon/>

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