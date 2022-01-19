import React from 'react';

// Images
import rhombus from '@root/assets/images/team/rhombus.png';
import twitterIcon from '@root/assets/images/team/twitter.svg';
import instagramIcon from '@root/assets/images/team/instagram.svg';
import linkedInIcon from '@root/assets/images/team/in.svg';

export default function({ name, title, description, avatar, color = {}, socials }){
    return (
        <div className="team-item">
            <div className="team-item__content-wrapper" style={{ backgroundColor: color.background }} >
                {Array.from({length: 4}).map((_, id) => (
                    <img src={rhombus} alt="rhombus" key={id} className={`team-item__rhombus team-item__rhombus_${id + 1}`} />
                ))}
                <div className="team-item__content">
                    <div className="team-item__avatar" style={{ backgroundColor: color.avatar }}>
                        <img src={avatar} alt="avatar" />
                    </div>
                    <h3 className="team-item__name">{name}</h3>
                    <div className="team-item__title">{title}</div>
                    <p className="team-item__description">{description}</p>
                    <div className="team-item__socials">
                        {socials.twitter && (
                            <a href={socials.twitter} className="team-item__socials-link">
                                <img src={twitterIcon} alt="icon" />
                            </a>
                        )}
                        {socials.instagram && (
                            <a href={socials.instagram} className="team-item__socials-link">
                                <img src={instagramIcon} alt="icon" />
                            </a>
                        )}
                        {socials.linkedIn && (
                            <a href={socials.linkedIn} className="team-item__socials-link">
                                <img src={linkedInIcon} alt="icon" />
                            </a>
                        )}
                    </div>
                </div>                
            </div>
        </div>
    );
}