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
import type08 from '@root/assets/images/types/type-08.png'; 
import type09 from '@root/assets/images/types/type-09.png'; 
import type10 from '@root/assets/images/types/type-10.png'; 
import type11 from '@root/assets/images/types/type-11.png'; 
import type12 from '@root/assets/images/types/type-12.png'; 
import type13 from '@root/assets/images/types/type-13.png'; 
import type14 from '@root/assets/images/types/type-14.png'; 
import type15 from '@root/assets/images/types/type-15.png'; 
import type16 from '@root/assets/images/types/type-16.png'; 
import type17 from '@root/assets/images/types/type-17.png'; 
import type18 from '@root/assets/images/types/type-18.png'; 
import type19 from '@root/assets/images/types/type-19.png'; 
import type20 from '@root/assets/images/types/type-20.png'; 
import type01Webp from '@root/assets/images/types/type-01.webp'; 
import type02Webp from '@root/assets/images/types/type-02.webp'; 
import type03Webp from '@root/assets/images/types/type-03.webp'; 
import type04Webp from '@root/assets/images/types/type-04.webp'; 
import type05Webp from '@root/assets/images/types/type-05.webp'; 
import type06Webp from '@root/assets/images/types/type-06.webp'; 
import type07Webp from '@root/assets/images/types/type-07.webp'; 
import type08Webp from '@root/assets/images/types/type-08.webp'; 
import type09Webp from '@root/assets/images/types/type-09.webp'; 
import type10Webp from '@root/assets/images/types/type-10.webp'; 
import type11Webp from '@root/assets/images/types/type-11.webp'; 
import type12Webp from '@root/assets/images/types/type-12.webp'; 
import type13Webp from '@root/assets/images/types/type-13.webp'; 
import type14Webp from '@root/assets/images/types/type-14.webp'; 
import type15Webp from '@root/assets/images/types/type-15.webp'; 
import type16Webp from '@root/assets/images/types/type-16.webp'; 
import type17Webp from '@root/assets/images/types/type-17.webp'; 
import type18Webp from '@root/assets/images/types/type-18.webp'; 
import type19Webp from '@root/assets/images/types/type-19.webp'; 
import type20Webp from '@root/assets/images/types/type-20.webp'; 
import background from '@root/assets/images/types/background.jpg'; 
import backgroundWebp from '@root/assets/images/types/background.webp'; 

export default function(){
    const [refMain, setRefMain] = useState(null);
    const [refRowUp, setRefRowUp] = useState(null);
    const [refRowDown, setRefRowDown] = useState(null);
    const [settings, setSettings] = useState({ inited: false });

    const initMoveLine = () => {
        if(!refMain || !refRowUp || !refRowDown){ return; }

        const step           = 0.8; // You can change this value to set speed you need.
        const {top, height, left}  = refMain.getBoundingClientRect();
        const elementFromTop = top + (window.pageYOffset || document.documentElement.scrollTop);
        const paddingTop     = window.innerHeight; 
        const paddingLeft    = window.innerWidth * 0.2;
        const startFrom      = elementFromTop - paddingTop;
        const scrollLength   = left < 0 ? window.innerWidth + Math.abs(left) : window.innerWidth - left;
        const initValue      = (scrollLength - paddingLeft) - (height + paddingTop) * step;

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

    useEffect(() => {
        document.readyState === "complete"
            ? initMoveLine()
            : window.addEventListener("load", initMoveLine);;
    }, [refMain, refRowUp, refRowDown]);

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
        <section className="types" id="lookbook">
            <picture>
                <source srcSet={backgroundWebp} type="image/webp" />
                <img src={background} alt="background" className="types__background" />
            </picture>
            <h2 className="types__title">Lookbook</h2>
            <div className="types__container" ref={setRefMain}>
                <div className="types__row" ref={setRefRowUp}>
                    <div className="types__item min">
                        <picture>
                            <source srcSet={type12Webp} type="image/webp" />
                            <img src={type12} alt="type-img" />
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
                            <source srcSet={type20Webp} type="image/webp" />
                            <img src={type20} alt="type-img" />
                        </picture>
                    </div>
                    {/* <div className="types__item">
                        <picture>
                            <source srcSet={type05Webp} type="image/webp" />
                            <img src={type05} alt="type-img" />
                        </picture>
                    </div> */}
                    <div className="types__item">
                        <picture>
                            <source srcSet={type06Webp} type="image/webp" />
                            <img src={type06} alt="type-img" />
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
                            <source srcSet={type08Webp} type="image/webp" />
                            <img src={type08} alt="type-img" />
                        </picture>
                    </div>
                    <div className="types__item">
                        <picture>
                            <source srcSet={type09Webp} type="image/webp" />
                            <img src={type09} alt="type-img" />
                        </picture>
                    </div>
                    <div className="types__item min">
                        <picture>
                            <source srcSet={type10Webp} type="image/webp" />
                            <img src={type10} alt="type-img" />
                        </picture>
                    </div>
                </div>
                <div className="types__row" ref={setRefRowDown}>                    
                    <div className="types__item min">
                        <picture>
                            <source srcSet={type11Webp} type="image/webp" />
                            <img src={type11} alt="type-img" />
                        </picture>
                    </div>
                    {/* <div className="types__item">
                        <picture>
                            <source srcSet={type12Webp} type="image/webp" />
                            <img src={type12} alt="type-img" />
                        </picture>
                    </div> */}
                    <div className="types__item">
                        <picture>
                            <source srcSet={type02Webp} type="image/webp" />
                            <img src={type02} alt="type-img" />
                        </picture>
                    </div>
                    <div className="types__item">
                        <picture>
                            <source srcSet={type14Webp} type="image/webp" />
                            <img src={type14} alt="type-img" />
                        </picture>
                    </div>
                    <div className="types__item">
                        <picture>
                            <source srcSet={type15Webp} type="image/webp" />
                            <img src={type15} alt="type-img" />
                        </picture>
                    </div>
                    <div className="types__item">
                        <picture>
                            <source srcSet={type16Webp} type="image/webp" />
                            <img src={type16} alt="type-img" />
                        </picture>
                    </div>
                    <div className="types__item">
                        <picture>
                            <source srcSet={type17Webp} type="image/webp" />
                            <img src={type17} alt="type-img" />
                        </picture>
                    </div>
                    <div className="types__item">
                        <picture>
                            <source srcSet={type18Webp} type="image/webp" />
                            <img src={type18} alt="type-img" />
                        </picture>
                    </div>
                    <div className="types__item">
                        <picture>
                            <source srcSet={type19Webp} type="image/webp" />
                            <img src={type19} alt="type-img" />
                        </picture>
                    </div>
                    <div className="types__item min">
                        <picture>
                            <source srcSet={type20Webp} type="image/webp" />
                            <img src={type20} alt="type-img" />
                        </picture>
                    </div>
                </div>
            </div>
        </section>
    );
}