import React, { useContext } from 'react';
import { Context } from '@root/Context';
import classNames from 'classnames';
import Socials from '@root/components/Socials/Socials';
import MintButton from '@root/components/MintButton/MintButton';
import "./menu.scss"

export default function(){
    const [ctx, setCtx] = useContext(Context);

    return (
        <div className={classNames("menu", {opened: ctx.openMenu})}>
            <div className="menu__wrapper">
                <header className="menu__header">
                    <MintButton className="hero__mint menu__mint" />
                    <button className="menu__cross" onClick={setCtx.bind(null, {...ctx, openMenu: false})}></button>
                </header>
                <div className="menu__body">
                    <span className="menu-title">Menu</span>
                    <nav className="menu__nav">
                        <a href="#">Vision</a>
                        <a href="#">Initial Collection</a>
                        <a href="#">Lookbook</a>
                        <a href="#">Team</a>
                        <a href="#">Roadmap</a>
                        <a href="#">F.A.Q.</a>
                        <a href="#">How it started</a>
                    </nav>
                </div>
                <footer className="menu__footer">
                    <span className="menu-title">Get in touch</span>
                    <Socials className="menu__socials" />
                </footer>
            </div>
        </div>
    );
}