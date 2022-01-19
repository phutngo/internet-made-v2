import React from 'react';
import Marquee from "react-fast-marquee";
import "./presentationhat.scss"

// Images
import logo from '@root/assets/images/logos-black.png';

export default function(){
    const settings =  {
        speed: 100,
        gradient: false,
        direction: "left",
    };

    return (
        <div className="presentationhat">    
            <Marquee {...settings}>          
                {Array.from({length: window.innerWidth > 991 ? 3 : 2}).map((item, id) => ( // For big screens         
                    <React.Fragment key={id}>                            
                        <div className="presentationhat__item">
                            {/* <span className="limiter"><span>Friends &amp;</span><span>Family Drop</span></span> */}
                            <div className="presentationhat-logo">
                                <img src={logo} alt="logo" />
                            </div>
                        </div>             
                        <div className="presentationhat__item">
                            <span className="big">February 2022</span>
                        </div>   
                    </React.Fragment>
                ))}
            </Marquee>
        </div>
    );
}