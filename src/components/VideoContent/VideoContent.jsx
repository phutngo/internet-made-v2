import React, { useState, useEffect } from 'react';
import "./videocontent.scss";

// Video
import room from '@root/assets/videos/room.mp4';

export default function(){
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const video = document.createElement("video");
        video.src = room;

        video.onloadeddata = setLoaded.bind(null, true);
    }, []);

    return (
        <section className="videocontent">
            {loaded && <video src={room} autoPlay loop muted playsInline></video>}
        </section>
    );
}