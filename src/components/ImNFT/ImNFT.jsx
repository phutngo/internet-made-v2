import React, { useState } from 'react';
import Marquee from 'react-fast-marquee';
import "./imnft.scss"

// Images
import barcode from '@root/assets/images/xoxo/barcode.png';
import texture from '@root/assets/images/xoxo/texture-right.png';

export default function(){
    const [settings, setSettings] = useState({
        gradient: false,
        speed: window.innerWidth * 0.301,
        play: window.innerWidth <= 1440,
        pauseOnHover: true,
        pauseOnClick: true
    });

    return (
        <div className="imnft">
            <Marquee {...settings}>
                <div className="imnft__white">
                    <div className="imnft__col padding barcode">
                        <div className="imnft__barcode">                        
                            <img src={barcode} alt="barcode" />
                        </div>
                    </div>
                    <div className="imnft__col padding center">
                        <div className="imnft__center">
                            <h2>
                                <span>INTERNET MADE NFT</span>
                            </h2>
                        </div>
                    </div>
                    <div className="imnft__col texture">
                        <div className="imnft__texture">
                            <img src={texture} alt="texture" />
                        </div>
                    </div>
                </div>
            </Marquee>
        </div>
    );
}