import classNames from 'classnames';
import React from 'react';
import "./numberscreen.scss"

export default function({ title, number, className, colors = {} }){
    return (
        <div className={classNames('numberscreen', {[className]: !!className})}>
            <div className="numberscreen__wrapper" style={{backgroundColor: colors.background}}>
                {Array.from({length: 4}).map((_, id) => (
                    <i 
                        key={id}
                        className={`numberscreen__plus numberscreen__plus_0${id+1}`} 
                        style={{"--color": colors.pluses}}
                    ></i>
                ))}
                <h4 className="numberscreen__title" style={{color: colors.title}}>{title}</h4>
                <h2 className="numberscreen__number" style={{color: colors.number}}>{number}</h2>
            </div>
        </div>
    );
}