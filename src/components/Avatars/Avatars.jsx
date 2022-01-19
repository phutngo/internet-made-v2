import React from 'react';
import "./avatars.scss"
import AvatarsBackground from './AvatarsBackground';

export default function(){
    return (
        <section className="avatars" data-lazy-bg="/assets/images/avatars/background.png">
            <AvatarsBackground />
            <div className="avatars__content">
                <div className="avatars__title">
                    <i></i><i></i><i></i><i></i>
                    <h3>Avatars</h3>
                    <h2>9999</h2>
                </div>
                <p className="avatars__text">
                    To start off the Internet Made movement &amp; brand, we will be 
                    releasing our initial collection of 9,999 IM ‘‘avatars’’ with 150+ 
                    traits. Each one will be a unique NFT, made out of traits in different colorways, 
                    ultimately being a 1/1 combination.
                    <br />
                    <br />
                    This avatar will grant you access to our ecosystem, which will be one of a kind. 
                    Our goal is to create the best possible experience for everyone involved - holders, 
                    artists &amp; founders.
                </p>
            </div>
        </section>
    );
}