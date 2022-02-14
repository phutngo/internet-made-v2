import React from 'react';
import "./avatars.scss"
import AvatarsBackground from './AvatarsBackground';

export default function(){
    return (
        <section className="avatars" data-lazy-bg="/assets/images/avatars/background.png" id="collection">
            <AvatarsBackground />
            <div className="avatars__content">
                <div className="avatars__title">
                    <i></i><i></i><i></i><i></i>
                    <h3>GENESIS COLLECTION</h3>
                    <h2>9999</h2>
                </div>
                <p className="avatars__text">
                    TO START OFF THE INTERNET MADE MOVEMENT, WE WILL BE 
                    RELEASING OUR GENESIS COLLECTION OF 9999 IM ‘‘AVATARS’’ 
                    IN 3 DROPS. 
                    <br />
                    <br />
                    THIS WILL GRANT YOU ACCESS TO OUR ECOSYSTEM, WHICH WILL BE AS UNIQUE AS YOUR AVATAR. 
                    OUR GOAL IS TO WELCOME EVERYONE – FROM OUR HOLDERS, ARTISTS, AND FOUNDERS – INTO 
                    THE FUTURE OF FASHION.
                </p>
            </div>
        </section>
    );
}