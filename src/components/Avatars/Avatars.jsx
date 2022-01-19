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
                    To start off the Internet Made (IM) movement, we will be releasing our initial 
                    collection of 9,999 IM ‘‘avatars’’ with 150+ traits. Each one will be a unique 
                    NFT made out of unique traits and colorways so that every NFT is a singular 1/1 
                    combination.
                    <br />
                    <br />
                    This will grant you access to our ecosystem, which will be as unique as your avatar. 
                    Our goal is to welcome everyone – from our holders, artists, and founders – into the 
                    future of fashion.
                </p>
            </div>
        </section>
    );
}