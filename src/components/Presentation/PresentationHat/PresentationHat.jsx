import React from 'react';
import Marquee from "react-fast-marquee";
import "./presentationhat.scss"

export default function(){
    const settings =  {
        speed: 100,
        gradient: false,
        direction: "right",
    };

    return (
        <div className="presentationhat">    
            <Marquee {...settings}>          
                {Array.from({length: window.innerWidth > 991 ? 3 : 2}).map((item, id) => ( // For big screens         
                    <React.Fragment key={id}>                            
                        <div className="presentationhat__item">
                            <span className="limiter"><span>Friends &amp;</span><span>Family Drop</span></span>
                        </div>             
                        <div className="presentationhat__item">
                            <span className="big">presale date</span>
                        </div>   
                    </React.Fragment>
                ))}
            </Marquee>
        </div>
    );
}