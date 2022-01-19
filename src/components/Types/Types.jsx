import React, {useState, useEffect} from 'react';
import "./types.scss";

// Images
import type01 from '@root/assets/images/types/type-01.png'; 
import type02 from '@root/assets/images/types/type-02.png'; 
import type03 from '@root/assets/images/types/type-03.png'; 
import type04 from '@root/assets/images/types/type-04.png'; 
import type05 from '@root/assets/images/types/type-05.png'; 
import type06 from '@root/assets/images/types/type-06.png'; 
import type07 from '@root/assets/images/types/type-07.png'; 
import type08min from '@root/assets/images/types/type-08-min.png'; 
import type09min from '@root/assets/images/types/type-09-min.png'; 
import type01Webp from '@root/assets/images/types/type-01.webp'; 
import type02Webp from '@root/assets/images/types/type-02.webp'; 
import type03Webp from '@root/assets/images/types/type-03.webp'; 
import type04Webp from '@root/assets/images/types/type-04.webp'; 
import type05Webp from '@root/assets/images/types/type-05.webp'; 
import type06Webp from '@root/assets/images/types/type-06.webp'; 
import type07Webp from '@root/assets/images/types/type-07.webp'; 
import type08minWebp from '@root/assets/images/types/type-08-min.webp'; 
import type09minWebp from '@root/assets/images/types/type-09-min.webp'; 

export default function(){
    const [refMain, setRefMain] = useState(null);
    const [refRowUp, setRefRowUp] = useState(null);
    const [refRowDown, setRefRowDown] = useState(null);
    const [settings, setSettings] = useState({ inited: false });

    const initMoveLine = () => {
        if(!refMain || !refRowUp || !refRowDown){ return; }
        if(document.readyState !== "complete"){
            window.addEventListener("load", initMoveLine);
        }

        const step           = 0.7; // You can change this value to set speed you need.
        const {top, height}  = refMain.getBoundingClientRect();
        const elementFromTop = top + (window.pageYOffset || document.documentElement.scrollTop);
        const paddingTop     = window.innerHeight; 
        const startFrom      = elementFromTop - paddingTop;
        const leftValue      = window.innerWidth - refRowUp.getBoundingClientRect().left;
        const initValue      = Math.min(0, ((elementFromTop + height) - startFrom - leftValue) * -step);

        setSettings({
            elementFromTop,
            initValue,
            paddingTop,
            startFrom,
            step
        });
    };

    const scrollHandler = (event) => {
        const scrolledBack   = Math.max(0, window.pageYOffset - settings.startFrom);
        const value          = settings.initValue + (scrolledBack * settings.step);
        
        refRowUp.style.transform = `translateX(${value * -1}px)`;
        refRowDown.style.transform = `translateX(${value}px)`;
    };

    useEffect(initMoveLine, [refMain, refRowUp, refRowDown]);

    useEffect(() => {
        if(settings.inited === false) { return; }

        scrollHandler();

        window.addEventListener("scroll", scrollHandler);
        window.addEventListener("resize", initMoveLine);

        return () => {
            window.removeEventListener("scroll", scrollHandler);
            window.removeEventListener("resize", initMoveLine);
        }
    }, [settings]);


    return (
        <section className="types" id="lookbook" data-lazy-bg="/assets/images/types/background.png">
            <h2 className="types__title">Lookbook</h2>
            <div className="types__container" ref={setRefMain}>
                <div className="types__row" ref={setRefRowUp}>
                    <div className="types__item min">
                        <picture>
                            <source srcSet={type08minWebp} type="image/webp" />
                            <img src={type08min} alt="type-img" />
                        </picture>
                    </div>
                    <div className="types__item">
                        <picture>
                            <source srcSet={type01Webp} type="image/webp" />
                            <img src={type01} alt="type-img" />
                        </picture>
                    </div>
                    <div className="types__item">
                        <picture>
                            <source srcSet={type02Webp} type="image/webp" />
                            <img src={type02} alt="type-img" />
                        </picture>
                    </div>
                    <div className="types__item">
                        <picture>
                            <source srcSet={type03Webp} type="image/webp" />
                            <img src={type03} alt="type-img" />
                        </picture>
                    </div>
                    <div className="types__item">
                        <picture>
                            <source srcSet={type04Webp} type="image/webp" />
                            <img src={type04} alt="type-img" />
                        </picture>
                    </div>
                    <div className="types__item">
                        <picture>
                            <source srcSet={type02Webp} type="image/webp" />
                            <img src={type02} alt="type-img" />
                        </picture>
                    </div>
                    <div className="types__item">
                        <picture>
                            <source srcSet={type07Webp} type="image/webp" />
                            <img src={type07} alt="type-img" />
                        </picture>
                    </div>
                    <div className="types__item min">
                        <picture>
                            <source srcSet={type09minWebp} type="image/webp" />
                            <img src={type09min} alt="type-img" />
                        </picture>
                    </div>
                </div>
                <div className="types__row" ref={setRefRowDown}>
                    <div className="types__item min">
                        <picture>
                            <source srcSet={type09minWebp} type="image/webp" />
                            <img src={type09min} alt="type-img" />
                        </picture>
                    </div>
                    <div className="types__item">
                        <picture>
                            <source srcSet={type05Webp} type="image/webp" />
                            <img src={type05} alt="type-img" />
                        </picture>
                    </div>
                    <div className="types__item">
                        <picture>
                            <source srcSet={type06Webp} type="image/webp" />
                            <img src={type06} alt="type-img" />
                        </picture>
                    </div>
                    <div className="types__item">
                        <picture>
                            <source srcSet={type02Webp} type="image/webp" />
                            <img src={type02} alt="type-img" />
                        </picture>
                    </div>
                    <div className="types__item">
                        <picture>
                            <source srcSet={type07Webp} type="image/webp" />
                            <img src={type07} alt="type-img" />
                        </picture>
                    </div>
                    <div className="types__item">
                        <picture>
                            <source srcSet={type01Webp} type="image/webp" />
                            <img src={type01} alt="type-img" />
                        </picture>
                    </div>
                    <div className="types__item">
                        <picture>
                            <source srcSet={type02Webp} type="image/webp" />
                            <img src={type02} alt="type-img" />
                        </picture>
                    </div>
                    <div className="types__item min">
                        <picture>
                            <source srcSet={type08minWebp} type="image/webp" />
                            <img src={type08min} alt="type-img" />
                        </picture>
                    </div>
                </div>
            </div>
        </section>
    );
}