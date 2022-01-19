import React from 'react';
import Marquee from "react-fast-marquee";
import "./presentationfooter.scss"

// Images
import zebra from '@root/assets/images/zebra.png';

export default function(){
    const settings = {
        speed: 100,
        gradient: false,
    };
    
    return (
        <div className="presentationfooter">
            <div className="presentationfooter__container">
                <Marquee {...settings}>
                    {Array.from({length: Math.max(1, Math.ceil(window.innerWidth / 480))}).map((item, id) => ( // For big screens
                        <React.Fragment key={id}>
                            <div className="presentationfooter__item">
                                <img src={zebra} alt="zebra" />
                            </div>
                            <div className="presentationfooter__item">
                                <p className='imade'>internet made</p>
                            </div>
                        </React.Fragment>
                    ))}
                </Marquee>
            </div>
        </div>
    );
}