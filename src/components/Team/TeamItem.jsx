import React from 'react';

// Images
import back from '@root/assets/images/team/back.png';
import backWebp from '@root/assets/images/team/back.webp';

export default function({ avatar, text, prof }){
    return (
        <div className="team-item">
            <picture>
                <source srcSet={backWebp} type="image/webp" />
                <img src={back} alt="back" className="team-item__back" />
            </picture>
            <picture>
                <source srcSet={avatar.webp} type="image/webp" />
                <img src={avatar.png} alt="personaje" className="team-item__personaje" />
            </picture>
            <p className="team-item__text">{text}</p>
            <div className="team-item__prof">
                <p>{prof}</p>
            </div>
        </div>
    );
}