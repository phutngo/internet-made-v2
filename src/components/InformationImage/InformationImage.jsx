import React from 'react';
import "./informationimage.scss"

export default function({ backgroundImage, avatar, colors = {} }){
    return (
        <div className='informationimage'>
            <div className="informationimage__wrapper">
                <img 
                    src={backgroundImage} 
                    alt="back-avatar" 
                    className='informationimage__background' 
                />
                <div className="informationimage__box" style={{backgroundColor: colors.backBlur}}>
                    <img 
                        src={avatar} 
                        alt="avatar" 
                        className='informationimage__avatar' 
                    />
                </div>
            </div>
        </div>
    );
}