import React from "react";

const search=()=>{
    return(
        <div className="search">
            <div className="searchform">
                <input type="text" placeholder="Find user"/>
            </div>
            <div className="userchat">
                <img src="https://images.pexels.com/photos/17042221/pexels-photo-17042221/free-photo-of-young-woman-in-eyeglasses-standing-on-a-basketball-court.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>
                <div className="userchatinfo">
                    <span>Jothi</span>
                </div>
            </div>
        </div>
    )
    
}



export default search;