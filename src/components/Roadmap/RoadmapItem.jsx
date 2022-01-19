import classNames from 'classnames';
import React from 'react';

export default function({phase, image, title, text, inverseWrapper, color = {}}){
    return (
        <div className={classNames("roadmap-item", {inverse: inverseWrapper})}>
            <div 
                className="roadmap-item__wrapper-background"
                style={{backgroundColor: color.background}}
            ></div>
            <div className="roadmap-item__wrapper" style={{ color: color.text }}>
                <div className="roadmap-item__image-wrapper">
                    <div className="roadmap-item__image" style={{backgroundColor: color.avatar}}>
                        <img src={image} alt="image" />
                    </div>
                    <div className="roadmap-item__image-content-block">
                        <h3 className='ri-h3'>Phase {phase}</h3>
                        <h4 className='ri-h4'>{title}</h4>
                    </div>
                </div>
                <div className="roadmap-item__content">
                    <h3 className='ri-h3'>Phase {phase}</h3>
                    <h4 className='ri-h4'>{title}</h4>
                    <div className="ri-text" dangerouslySetInnerHTML={{__html: text}}></div>
                </div>
            </div>

        </div>
    );
}