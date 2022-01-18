import classNames from 'classnames';
import React from 'react';
import "./socials.scss"

// Images
import youtube from '@root/assets/images/socials/youtube.png';
import twitter from '@root/assets/images/socials/twitter.png';
import discord from '@root/assets/images/socials/discord.png';
import instagram from '@root/assets/images/socials/instagram.png';

export default function({ className }){
    return (
        <div className={classNames("socials", { [className]: !!className })}>
            <a href="https://youtube.com" className="socials__link">
                <img src={youtube} alt="youtube" />
            </a>
            <a href="https://twitter.com" className="socials__link">
                <img src={twitter} alt="twitter" />
            </a>
            <a href="https://discord.com" className="socials__link">
                <img src={discord} alt="discord" />
            </a>
            <a href="https://instagram.com" className="socials__link">
                <img src={instagram} alt="instagram" />
            </a>
        </div>
    );
}