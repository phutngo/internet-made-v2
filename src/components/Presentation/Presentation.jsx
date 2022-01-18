import React from 'react';
import "./presentation.scss"
import PresentationHat from './PresentationHat/PresentationHat';
import PresentationFooter from './PresentationFooter/PresentationFooter';
import Marquee from 'react-fast-marquee';

export default function(){
    const settings =  {
        speed: 100,
        gradient: false,
        direction: "left",
    };

    return ( 
        <div className="presentation">
            <PresentationHat />
                <div className="presentation__date">
                    <span>Coming this February 2022</span>
                </div>
            <PresentationFooter />
        </div>
    );
}