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

export default function(){
    const [refMain, setRefMain] = useState(null);
    const [refRowUp, setRefRowUp] = useState(null);
    const [refRowDown, setRefRowDown] = useState(null);
    const [settings, setSettings] = useState({ inited: false });

    console.log(settings)

    const initMoveLine = () => {
        if(!refMain || !refRowUp || !refRowDown){ return; }
        // if(document.readyState !== "complete"){
        //     window.addEventListener("load", initMoveLine);
        // }

        const step           = 0.8; // You can change this value to set speed you need.
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
                            <img src={type12} alt="type-img" />
                        </picture>
                    </div>
                    <div className="types__item">
                        <picture>
                            <img src={type02} alt="type-img" />
                        </picture>
                    </div>
                    <div className="types__item">
                        <picture>
                            <img src={type03} alt="type-img" />
                        </picture>
                    </div>
                    <div className="types__item">
                        <picture>
                            <img src={type04} alt="type-img" />
                        </picture>
                    </div>
                    {/* <div className="types__item">
                        <picture>
                            <img src={type05} alt="type-img" />
                        </picture>
                    </div> */}
                    <div className="types__item">
                        <picture>
                            <img src={type06} alt="type-img" />
                        </picture>
                    </div>
                    <div className="types__item">
                        <picture>
                            <img src={type07} alt="type-img" />
                        </picture>
                    </div>
                    <div className="types__item">
                        <picture>
                            <img src={type08} alt="type-img" />
                        </picture>
                    </div>
                    <div className="types__item">
                        <picture>
                            <img src={type09} alt="type-img" />
                        </picture>
                    </div>
                    <div className="types__item min">
                        <picture>
                            <img src={type10} alt="type-img" />
                        </picture>
                    </div>
                </div>
                <div className="types__row" ref={setRefRowDown}>                    
                    <div className="types__item min">
                        <picture>
                            <img src={type11} alt="type-img" />
                        </picture>
                    </div>
                    {/* <div className="types__item">
                        <picture>
                            <img src={type12} alt="type-img" />
                        </picture>
                    </div> */}
                    <div className="types__item">
                        <picture>
                            <img src={type13} alt="type-img" />
                        </picture>
                    </div>
                    <div className="types__item">
                        <picture>
                            <img src={type14} alt="type-img" />
                        </picture>
                    </div>
                    <div className="types__item">
                        <picture>
                            <img src={type15} alt="type-img" />
                        </picture>
                    </div>
                    <div className="types__item">
                        <picture>
                            <img src={type16} alt="type-img" />
                        </picture>
                    </div>
                    <div className="types__item">
                        <picture>
                            <img src={type17} alt="type-img" />
                        </picture>
                    </div>
                    <div className="types__item">
                        <picture>
                            <img src={type18} alt="type-img" />
                        </picture>
                    </div>
                    <div className="types__item">
                        <picture>
                            <img src={type19} alt="type-img" />
                        </picture>
                    </div>
                    <div className="types__item min">
                        <picture>
                            <img src={type20} alt="type-img" />
                        </picture>
                    </div>
                </div>
            </div>
        </section>
    );
}