import React from "react";

const message=()=>{
    return (
        <div className="message owner">
        <div className="messageinfo">
        <img
            src="https://images.pexels.com/photos/17394386/pexels-photo-17394386/free-photo-of-ancient-architecture.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
            alt="img"
        />
        <span>just now</span>

        </div>
        <div className="messagecontent">
        <p>how r u?</p>
        {/* <img src="https://images.pexels.com/photos/17394386/pexels-photo-17394386/free-photo-of-ancient-architecture.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
            alt=""
        />  */}

        </div>

        </div>
    )
}



export default message;