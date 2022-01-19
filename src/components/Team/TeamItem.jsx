import React from 'react';

// Images
import rhombus from '@root/assets/images/team/rhombus.png';
import twitterIcon from '@root/assets/images/team/twitter.svg';
import instagramIcon from '@root/assets/images/team/instagram.svg';
import linkedInIcon from '@root/assets/images/team/in.svg';

export default function({ name, title, description, realImage = {}, avatar = {}, color = {}, socials }){
    return (
        <div className="team-item">
            <div className="team-item__content-wrapper" style={{ backgroundColor: color.background }} >
                {Array.from({length: 4}).map((_, id) => (
                    <img src={rhombus} alt="rhombus" key={id} className={`team-item__rhombus team-item__rhombus_${id + 1}`} />
                ))}
                <div className="team-item__content">
                    <div className="team-item__avatar" style={{ backgroundColor: color.avatar }}>
                        <picture>
                            <source srcSet={avatar.webp} type="image/webp" />
                            <img src={avatar.png || avatar.jpg || avatar.gif} alt="avatar" className="fake-avatar" />
                        </picture>
                        <picture>
                            <source srcSet={realImage.webp} type="image/webp" />
                            <img src={realImage.png || realImage.jpg || realImage.gif} alt="avatar" className="real-avatar" />
                        </picture>
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