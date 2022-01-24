import React, { useState, useEffect } from 'react';
import {getData} from "@root/javascript/utils";
import PlusButton from '@root/components/PlusButton/PlusButton';
import "./mintworkspace.scss";

// Images
import workspaceBackground from '@root/assets/images/mint/workspace-background.png';
import classNames from 'classnames';

export default function(){
    const [value, setValue] = useState(1);
    const [config, setConfig] = useState({
        MIN_VALUE: 1,
        MAX_VALUE: 9999,
        STEP: 1,
        PICTURE: null
    });

    const addClickHandler = () => {
        setValue(Math.min(config.MAX_VALUE, value + 1));
    };

    const minusClickHandler = () => {
        setValue(Math.max(config.MIN_VALUE, value - 1));
    };

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
                            className={classNames("mintworkspace__controls-btn plus", { disabled: config.MAX_VALUE === value})} 
                            onClick={addClickHandler}
                        ></button>
                        <button 
                            className={classNames("mintworkspace__controls-btn minus", { disabled: config.MIN_VALUE === value})} 
                            onClick={minusClickHandler}
                        ></button>
                    </div>
                </div>
                <div className="mintworkspace__range">
                    <div className="mintworkspace__range-line"></div>
                    <button className="mintworkspace__range-avatar">
                        <img src={config.PICTURE} alt="avatar" />
                    </button>
                </div>
                <PlusButton className="mintworkspace__btn">
                    <span>Mint <strong>{value}</strong> intenet made nft!</span>
                </PlusButton>
            </div>
        </div>
    );
}