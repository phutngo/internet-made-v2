import React from 'react';
import Marquee from "react-fast-marquee";
import { useEffect } from 'react';
import { useState } from 'react';
import './avatarsbackground.scss';

// Images
import card2 from '@root/assets/images/avatars/card-02.png';
import card3 from '@root/assets/images/avatars/card-03.png';
import card4 from '@root/assets/images/avatars/card-04.png';
import card5 from '@root/assets/images/avatars/card-05.png';
import card6 from '@root/assets/images/avatars/card-06.png';
import card2Webp from '@root/assets/images/avatars/card-02.webp';
import card3Webp from '@root/assets/images/avatars/card-03.webp';
import card4Webp from '@root/assets/images/avatars/card-04.webp';
import card5Webp from '@root/assets/images/avatars/card-05.webp';
import card6Webp from '@root/assets/images/avatars/card-06.webp';

export default function(){
    const [animation, setAnimation] = useState(null);
    const [settings, setSettings] = useState({
        speed: window.innerWidth * 0.05,
        gradient: false,
        overflow: false,
        onCycleComplete(){
            const elements = document.querySelectorAll(".avatarsback .avatarsback__item");
            for(let element of elements){
                const {left} = element.getBoundingClientRect();
                const opacity = Math.abs(1 - ((left + window.innerWidth * 0.1) / window.innerWidth ));
                element.style.opacity = opacity > 1 ? 2 - opacity : opacity;
            }
        }
    });

    const moveHandler = () => {
        let raf = null;
        let elements = [];

        function animate(){  
            if(elements.length === 0){
                elements = document.querySelectorAll(".avatarsback .avatarsback__item");  
            }
            for(let element of elements){
                const {left} = element.getBoundingClientRect();
                const opacity = Math.abs(1 - ((left + window.innerWidth * 0.1) / window.innerWidth ));
                element.style.opacity = opacity > 1 ? 2 - opacity : opacity;
            }

            raf = requestAnimationFrame(animate);
        }

        return {
            start(){ animate(); },
            stop(){ cancelAnimationFrame(raf); }
        }
    };

    function setResize(){
        setSettings({
            ...settings,
            speed: window.innerWidth <= 768 ? window.innerWidth * 0.3 : window.innerWidth * 0.018
        })
    }

    useEffect(() => {
        const newAnimation = moveHandler();
        setAnimation(newAnimation);

        newAnimation.start();
        window.addEventListener("resize", setResize);

        return () =>{ 
            animation.stop();            
            window.removeEventListener("resize", setResize);
        }
    }, []);

    return (
        <div className="avatarsback">
            <div className="avatarsback__container">       
                <div className="avatarsback__wrapper">
                    <Marquee className="marquee__root" {...settings}>
                        {Array.from({length: window.innerWidth > 991 ? 2 : 1}).map((item, id) => ( // For big screens
                            <React.Fragment key={id}>
                                <div className="avatarsback__item">
                                    <picture>
                                        <source srcSet={card3Webp} type="image/webp" />
                                        <img src={card3} alt="card" className="avatarsback__card-img"/>
                                    </picture>
                                </div>
                                <div className="avatarsback__item">
                                    <picture>
                                        <source srcSet={card2Webp} type="image/webp" />
                                        <img src={card2} alt="card" className="avatarsback__card-img"/>
                                    </picture>
                                </div>
                                <div className="avatarsback__item">
                                    <picture>
                                        <source srcSet={card3Webp} type="image/webp" />
                                        <img src={card3} alt="card" className="avatarsback__card-img"/>
                                    </picture>
                                </div>
                                <div className="avatarsback__item">
                                    <picture>
                                        <source srcSet={card4Webp} type="image/webp" />
                                        <img src={card4} alt="card" className="avatarsback__card-img"/>
                                    </picture>
                                </div>
                                <div className="avatarsback__item">
                                    <picture>
                                        <source srcSet={card5Webp} type="image/webp" />
                                        <img src={card5} alt="card" className="avatarsback__card-img"/>
                                    </picture>
                                </div>
                                <div className="avatarsback__item">
                                    <picture>
                                        <source srcSet={card6Webp} type="image/webp" />
                                        <img src={card6} alt="card" className="avatarsback__card-img"/>
                                    </picture>
                                </div>
                            </React.Fragment>
                        ))}
                    </Marquee>
                </div>      
            </div>
        </div>
    );
}