import React from 'react';
import "./started.scss";

// Images
import personaje from '@root/assets/images/hero/personaje-04.png'

export default function(){
    return (
        <section className="started" id="howitstarted">
            <div className="started__container">
                <div className="started__content">
                    <h2 className="started__title">HOW IT STARTED</h2>
                    <div className="started__text">
                        <p>
                            It was in June 2021 when we met in real life for the first time. What was first meant 
                            to be a quick chat turned into us talking for hours about Web3. We wanted to make something
                            bigger than just the two of us. After all, we were entering a new era, full of opportunities 
                            and possibilities, so the timing was perfect.
                        </p>
                        <p>
                            We both had a streetwear brand in the past. Some people loved it, some didn’t, but 
                            to us it was everything we ever wanted it to be - a reflection of our imagination, 
                            a way to express ourselves.
                        </p>
                        <p>
                            In that meeting, we both realized that we had a shared vision to bring our fashion knowledge 
                            to the new frontier. We wanted to do something that had never been done before in our own way.
                        </p>
                        <p>
                            Fast forward four months later, and we were ready. We found our investors who loved the 
                            idea, our plan, and who believed in us. Thank you to Andrej and Miran for making all of 
                            this possible.
                        </p>
                        <p>
                            With our vision and our investors, it was time to form our A-Team. We assembled 
                            the superstars from our network and past projects, including five talented designers: 
                            our lead designer Nik Preston, our 3D model designer Kristian Ivansek, and our three 
                            fashion designers: Lara Ponebsek, Hugo Suklje, and Lara Pikovnik.
                        </p>
                        <p>
                            Together, we are Internet Made.
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