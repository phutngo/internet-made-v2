import React from 'react';
import "./presentation.scss"
import PresentationHat from './PresentationHat/PresentationHat';
import PresentationFooter from './PresentationFooter/PresentationFooter';

export default function(){
    return ( 
        <div className="presentation">
            <PresentationHat />
            <div className="presentation__date">
                <span>26.1.22</span>
            </div>
            <PresentationFooter />
        </div>
    );
}