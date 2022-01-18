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
            <div className="presentationfooter__container" data-scroll-parent>
                <Marquee {...settings}>
                    {Array.from({length: window.innerWidth > 991 ? 2 : 1}).map((item, id) => ( // For big screens
                        <React.Fragment key={id}>
                            <div className="presentationfooter__item">
                                <p className='fashion'>
                                    fashion NFT fashion NFT fashion NFT 
                                </p>
                            </div>
                            <div className="presentationfooter__item">
                                <img src={zebra} alt="zebra" />
                            </div>
                            <div className="presentationfooter__item">
                                <p className='imade'>internet made</p>
                            </div>
                            <div className="presentationfooter__item">
                                <p className="text">
                                    F&amp;F (Friends &amp; Family) will have 1 free mint.
                                    1 qualified Internet Made NFT gives 2 reserved opportunities 
                                    to buy into the 48 hr pre-sale. To access members-only areas 
                                    such as dressing room, Internet Made will need to be signed 
                                    into their Metamask Wallet.
                                </p>
                            </div>
                        </React.Fragment>
                    ))}
                </Marquee>
            </div>
        </div>
    );
}