import classNames from 'classnames';
import React from 'react';
import "./socials.scss"

// Images
import twitter from '@root/assets/images/socials/twitter.png';
import discord from '@root/assets/images/socials/discord.png';
import instagram from '@root/assets/images/socials/instagram.png';

export default function({ className }){
    return (
        <div className={classNames("socials", { [className]: !!className })}>
            <a href="https://twitter.com/InternetMadeNF" className="socials__link">
                <img src={twitter} alt="twitter" />
            </a>
            <a href="https://discord.gg/mUtyPpSHhh" className="socials__link">
                <img src={discord} alt="discord" />
            </a>
            <a href="https://www.instagram.com/internetmadenft/" className="socials__link">
                <img src={instagram} alt="instagram" />
            </a>
        </div>
    );
}