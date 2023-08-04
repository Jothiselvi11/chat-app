import React, { useContext } from "react";
import Messages from "./messages";
import Input from "./input";
import VideoCallIcon from '@mui/icons-material/VideoCall';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { ChatContext } from "../context/ChatContext";

const Chat=()=>{
    const {data} =useContext(ChatContext);
    return <div className="chat">
        <div className="chatinfo">
            <span>{data.user?.displayName}</span>
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



export default Chat