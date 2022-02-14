import React from 'react';
import "./presentation.scss"
import PresentationHat from './PresentationHat/PresentationHat';
import PresentationFooter from './PresentationFooter/PresentationFooter';
import Marquee from 'react-fast-marquee';

export default function(){
    const settings =  {
        speed: 84,
        gradient: false,
        direction: "left",
    };

    return ( 
        <section className="presentation">
            <PresentationHat />
                <div className="presentation__date">
                    <Marquee {...settings}>            
                        <span>Coming this February 2022</span>
                    </Marquee>
                </div>
            <PresentationFooter />
        </section>
    );
}