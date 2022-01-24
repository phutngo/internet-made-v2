import React, { useState, useEffect } from 'react';
import {getData} from "@root/javascript/utils";
import PlusButton from '@root/components/PlusButton/PlusButton';
import "./mintworkspace.scss";

// Images
import workspaceBackground from '@root/assets/images/mint/workspace-background.png';
import classNames from 'classnames';
import Range from '../Range/Range';

export default function(){
    const [parentRef, setParentRef] = useState(null);
    const [ref, setRef] = useState(null);
    const [value, setValue] = useState(1);
    const [config, setConfig] = useState({
        min_value: 1,
        max_value: 9999,
        init_value: 1,
        step: 1,
        picture: null,
        smooth: false
    });

    const addClickHandler = () => {
        setValue(Math.min(config.max_value, value + config.step));
    };

    const minusClickHandler = () => {
        setValue(Math.max(config.min_value, value - config.step));
    };

    useEffect(() => {
        setValue(config.init_value || config.min_value);
    }, [config]);

    useEffect(getData.bind(null, "/json/mint-config.json", setConfig), []);

    return (
        <div className="mintworkspace">
            <div className="mintworkspace__wrapper" data-lazy-bg={workspaceBackground}>
                <div className="mintworkspace__header">
                    <div className="mintworkspace__display">
                        <i></i><i></i><i></i><i></i>
                        <span>{value}</span>
                    </div>
                    <div className="mintworkspace__controls">
                        <button 
                            className={classNames("mintworkspace__controls-btn plus", { disabled: config.max_value === value})} 
                            onClick={addClickHandler}
                        ></button>
                        <button 
                            className={classNames("mintworkspace__controls-btn minus", { disabled: config.min_value === value})} 
                            onClick={minusClickHandler}
                        ></button>
                    </div>
                </div>
                <Range {...config} state={[value, setValue]} />
                <PlusButton className="mintworkspace__btn">
                    <span>Mint <strong>{value}</strong> intenet made nft!</span>
                </PlusButton>
            </div>
        </div>
    );
}