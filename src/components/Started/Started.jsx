import React from 'react';
import "./started.scss";

// Images
import personaje from '@root/assets/images/started-personaje.png'

export default function(){
    return (
        <section className="started" id="howitstarted">
            <div className="started__container">
                <div className="started__content">
                    <h2 className="started__title">HOW IT STARTED</h2>
                    <div className="started__text">
                        <p>
                            It was in June 2021, when we met in real life for the first time. 
                            What was first meant to be a quick chat, turned into us two talking 
                            for hours about web3 and that we wanted to make something bigger than 
                            us. After all, we were entering a new era, full of opportunities and 
                            possibilities, so the timing was perfect.
                        </p>
                        <p>
                            We both had a streetwear brand in the past (one could argue successful or not, 
                            to us it was everything we ever wanted it to be - a reflection of our 
                            imagination, a way to express ourselves and some people loved it) &amp; at that 
                            moment we both had marketing agencies, which we merged together now under Fuell Media. 
                            Rok was already very experienced in web3 (got into crypto in late 2017) &amp; was researching about 
                            NFTs from March 2021, so our vision was to create something fashion related in this space. 
                            Something that was never done before. Our way.
                        </p>
                        <p>
                            Fast forward 4 months, we were ready. We found our investors, who loved the idea, 
                            our plan and most importantly believed in us. Thank you Andrej and Miran for 
                            making all of this possible.
                        </p>
                        <p>
                            We had a great idea and it was time to find and put together an A-team. 
                            From our past projects and network we found 5 most talented and ambitious designers - 
                            our lead designer Nik, 3D model designer Kristian and our 3 fashion designers, Lara, 
                            Hugo &amp; Lara.
                        </p>
                    </div>
                </div>
                <div className="started__image">
                    <img src={personaje} alt="personaje" />
                </div>
            </div>
        </section>
    );
}