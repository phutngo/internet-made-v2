import React, { useEffect } from 'react';
import "./xoxo.scss";

// Images
import background from '@root/assets/images/xoxo/background.jpg';
import backgroundWebp from '@root/assets/images/xoxo/background.webp';
import backgroundMobile from '@root/assets/images/xoxo/background@mobile.jpg';
import backgroundMobileWebp from '@root/assets/images/xoxo/background@mobile.webp';

export default function(){
    return (
        <section className="xoxo">
            <picture>
                <source srcSet={backgroundMobileWebp} media="(max-width: 991px)" type='image/webp' />
                <source srcSet={backgroundMobile} media="(max-width: 991px)" type='image/png' />
                <source srcSet={backgroundWebp} type='image/webp' />
                <img src={background} alt="" className="xoxo__background"/>
            </picture>
            <div className="xoxo__container container">
                <div className="xoxo__content">
                    <h2>Our Vision</h2>
                    <p className='big'>
                        Internet Made is more than a collection: we’re a movement bringing the 
                        fashion house to the digital world. We’re an artificial fashion atelier 
                        bringing our community into our vision and future creative development. 
                        Our designs evolve with the changing landscape of innovation.
                    </p>
                    <p className="small">
                        Internet Made is a brand and a movement bringing artists, creators, and fashion 
                        designers together to use technology to express themselves in a new way
                    </p>
                </div>
            </div>
        </section>
    );
}