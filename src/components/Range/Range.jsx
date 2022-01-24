import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import "./range.scss"

export default function({ step, smooth, picture, min_value, max_value, state }){
    const [value, setValue]             = state;
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

    console.log(value)

    const getCoords = () => {
        const sliderCoords  = sliderRef.getBoundingClientRect();
        const thumbCoords   = thumbRef.getBoundingClientRect(); 
        const thumbCenter   = thumbCoords.width / 2;
        const MIN_X         = 0;
        const MAX_X         = sliderCoords.width - thumbCoords.width;
        const stepDivider   = (max_value - min_value) / step;
        const stepWidth     = MAX_X / stepDivider;
        const divider       = stepWidth / step;
        const strFixed      = String(step).split(".")[1]?.length || 0;

        return {
            sliderCoords,
            thumbCoords,
            thumbCenter,
            MIN_X,
            MAX_X,
            stepDivider,
            stepWidth,
            divider,
            strFixed
        };
    }

    const onMouseMove = (event) => {
        if(active === false || sliderRef === null || thumbRef === null){ return; };

        const coords        = getCoords();
        const currentX      = event.clientX - coords.sliderCoords.left;
        const left          = Math.max(coords.MIN_X, Math.min(coords.MAX_X, currentX - coords.thumbCenter));

        const positionLeft  = smooth === true 
            ? left
            : Math.round(left / coords.stepWidth) * coords.stepWidth;

        const value         = Math
            .min(max_value, min_value + Math.round(positionLeft / coords.divider / step) * step )
            .toFixed(coords.strFixed);

        setCoords({
            left: positionLeft + "px"
        });

        setValue(Number(value));
    };

    useEffect(() => {
        if(active === true || sliderRef === null || thumbRef === null){ return; };

        const coords    = getCoords();
        const left      = (value - 1) * coords.stepWidth + "px";
        
        setCoords({
            left
        });
    }, [state]);

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
                <img src={picture} alt="avatar" />
            </button>
        </div>
    );
}