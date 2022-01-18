import React from 'react';
import Marquee from "react-fast-marquee";
import "./ticker.scss"

export default function(){
    const settings = {
        speed: 150,
        gradient: false,
    };

    return (
        <div className="ticker">
            <div className="ticker__dynamic">
                <div className="ticker__dynamic-container">
                    <Marquee {...settings}>
                        {Array.from({length: 7}).map((item, id) => ( // For big screens                     
                            <div className="ticker__item" key={id}>
                                <span>Internet Made</span>
                            </div>
                        ))}
                    </Marquee>
                </div>
            </div>
            <div className="ticker__static"></div>
        </div>
    );
}