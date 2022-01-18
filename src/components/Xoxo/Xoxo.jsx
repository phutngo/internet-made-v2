import React, { useEffect } from 'react';
import "./xoxo.scss";

// Images
import background from '@root/assets/images/xoxo/background.jpg';
import backgroundWebp from '@root/assets/images/xoxo/background.webp';
import backgroundMobile from '@root/assets/images/xoxo/background@mobile.jpg';
import backgroundMobileWebp from '@root/assets/images/xoxo/background@mobile.webp';

export default function(){
    return (
        <div className="xoxo">
            <picture>
                {/* <source srcSet={backgroundMobileWebp} media="(max-width: 991px)" type='image/webp' />
                <source srcSet={backgroundMobile} media="(max-width: 991px)" type='image/png' />
                <source srcSet={backgroundWebp} type='image/webp' /> */}
                <img src={background} alt="" className="xoxo__background"/>
            </picture>
            <div className="xoxo__container container">
                <div className="xoxo__content">
                    <h2>Our Vision</h2>
                    <p className='big'>
                        We are not just a collection. We are something much bigger, 
                        that is tough to put into words just yet. Simplest way to put 
                        it is that we are a fashion house or as we label ourselves ‘‘an 
                        artificial fashion atelier’’ that involves the community in our 
                        vision, creations and development of what Internet Made will be 
                        in the upcoming years.
                    </p>
                    <p className="small">
                        Our designs are not final, just as our vision will progress into something 
                        bigger than us - a movement for all the artists, creators &amp; fashion designers. 
                    </p>
                </div>
            </div>
        </div>
    );
}