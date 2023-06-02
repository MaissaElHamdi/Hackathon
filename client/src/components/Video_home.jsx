import React from "react";
import HomeVid from '../Assets/HackVid.mp4'
const Video =()=>{
    return (
        <div className="vid_home">
            <video src={HomeVid} type="video/mp4" autoPlay loop muted></video>
            
        </div>
    )
}

export default  Video