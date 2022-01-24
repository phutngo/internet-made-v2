import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import "./range.scss"

export default function(props){
    const [value, setValue]             = props.state;
    const [settings, setSettings]       = useState({ inited: false });
    const [sliderRef, setSliderRef]     = useState(null);
    const [thumbRef, setThumbRef]       = useState(null);
    const [active, setActive]           = useState(false);
    const [coords, setCoords]           = useState({});

    const onMouseDown = (event) => {
        setActive(true);
    };

    const onMouseUp = (event) => {
        setActive(false);
    };

    const onMouseMove = (event) => {
        if(active === false || sliderRef === null || thumbRef === null){ return; };

        const sliderCoords  = sliderRef.getBoundingClientRect();
        const thumbCoords   = thumbRef.getBoundingClientRect();
        const thumbCenter   = thumbCoords.width / 2;
        const MIN_X         = 0;
        const MAX_X         = sliderCoords.width - thumbCoords.width;
        const currentX      = event.clientX - sliderCoords.left;
        const left          = Math.max(MIN_X, Math.min(MAX_X, currentX - thumbCenter));
        const step          = (settings.max - settings.min) / settings.step;
        const stepWidth     = MAX_X / step;
        const divider       = stepWidth / settings.step;

        const positionLeft  = settings.smooth === true 
            ? left
            : Math.round(left / stepWidth) * stepWidth;

        const strFixed      = String(settings.step).split(".")[1]?.length || 0;

        const value         = Math
            .min(settings.max, settings.min + Math.round(positionLeft / divider / settings.step) * settings.step )
            .toFixed(strFixed);

        setCoords({
            left: positionLeft + "px"
        });

        setValue(Number(value));
    };

    useEffect(() => {
        setSettings({
            inited: true,
            picture: props.PICTURE,
            min: props.MIN_VALUE,
            max: props.MAX_VALUE,
            step: props.STEP,
            smooth: props.SMOOTH
        });
    }, [props]);

    useEffect(() => {
        document.addEventListener("mousemove", onMouseMove);
        document.addEventListener("mouseup", onMouseUp);

        return () => {
            document.removeEventListener("mousemove", onMouseMove);
            document.removeEventListener("mouseup", onMouseUp);
        };
    });

    return (
        <div className="range" ref={setSliderRef}>
            <div className="range__line"></div>
            <button 
                className="range__avatar"
                ref={setThumbRef} 
                onMouseDown={onMouseDown}
                onMouseUp={onMouseUp}
                style={coords}
            >
                <img src={settings.picture} alt="avatar" />
            </button>
        </div>
    );
}