import React from 'react';
import "./videocontent.scss";

// Video
import room from '@root/assets/videos/room.mp4';

export default function(){
    return (
        <div className="videocontent">
            <video src={room} autoPlay loop muted playsInline></video>
        </div>
    );
}