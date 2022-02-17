import React from 'react';
import "./invite.scss"

// Images
import personaje01 from '@root/assets/images/invite/personaje-01.png';
import personaje02 from '@root/assets/images/invite/personaje-02.png';
import personaje03 from '@root/assets/images/invite/personaje-03.png';
import rhombus from '@root/assets/images/invite/rhombus.png';
import corner from '@root/assets/images/invite/corner.png';
import discord from '@root/assets/images/invite/discord.png';
import PlusButton from '../PlusButton/PlusButton';

export default function(){
    return (
        <section className="invite">
            <div className="invite__limiter">                
                <div className="invite__container container">
                    <img src={rhombus} alt="rhombus" className="invite__rhombus invite__rhombus_1" />
                    <img src={rhombus} alt="rhombus" className="invite__rhombus invite__rhombus_2" />
                    <img src={rhombus} alt="rhombus" className="invite__rhombus invite__rhombus_3" />
                    <img src={rhombus} alt="rhombus" className="invite__rhombus invite__rhombus_4" />
                    <div className="invite__wrapper">
                        <img src={corner} alt="corner" className="invite__corner invite__corner_1" />
                        <img src={corner} alt="corner" className="invite__corner invite__corner_2" />
                        <img src={corner} alt="corner" className="invite__corner invite__corner_3" />
                        <img src={corner} alt="corner" className="invite__corner invite__corner_4" />
                        <div className="invite__content">
                            <div className="invite__left">
                                <h1>Join Our Discord</h1>
                                <PlusButton className="invite__btn" target="_blank">
                                    <p className='hide'>
                                        <span>Discord</span>
                                        <img src={discord} alt="discord" />
                                    </p>
                                    <p className="show"><span>Closed</span></p>
                                </PlusButton>
                            </div>
                            <div className="invite__right">
                                <img src={personaje01} alt="personaje" className="invite__personaje invite__personaje_1" />
                                <img src={personaje02} alt="personaje" className="invite__personaje invite__personaje_2" />
                                <img src={personaje03} alt="personaje" className="invite__personaje invite__personaje_3" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}