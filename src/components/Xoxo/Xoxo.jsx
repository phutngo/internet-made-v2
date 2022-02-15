import React, { useEffect } from 'react';
import "./xoxo.scss";

// Images
import background from '@root/assets/images/xoxo/background.jpg';
import backgroundWebp from '@root/assets/images/xoxo/background.webp';
import backgroundMobile from '@root/assets/images/xoxo/background@mobile.jpg';
import backgroundMobileWebp from '@root/assets/images/xoxo/background@mobile.webp';

export default function(){
    return (
        <section className="xoxo" id="xoxo">
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
                        INTERNET MADE IS BOTH A BRAND AND A MOVEMENT BRINGING ARTISTS, CREATORS, 
                        AND FASHION DESIGNERS TOGETHER TO USE TECHNOLOGY TO EXPRESS THEMSELVES 
                        IN A NEW WAY.
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