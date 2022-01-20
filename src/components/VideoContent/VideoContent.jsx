import React, { useState, useEffect } from 'react';
import "./videocontent.scss";

// Video
import room from '@root/assets/videos/room.mp4';
import videoPreview from '@root/assets/images/video-preview.jpg';
import videoPreviewWebp from '@root/assets/images/video-preview.webp';
import Loader from '../Loader/Loader';

export default function(){
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const video = document.createElement("video");
        video.src = room;

        video.onloadeddata = setLoaded.bind(null, true);
    }, []);

    return (
        <section className="videocontent">
            {loaded === false && (
                <div className="videocontent__preview-image">
                    <picture>
                        <source srcSet={videoPreviewWebp} type="image/webp" />
                        <img src={videoPreview} alt="videoPreview" />
                    </picture>
                    <Loader className="videocontent__loader" />
                </div>
            )}
            {loaded && <video src={room} autoPlay loop muted playsInline></video>}
        </section>
    );
}