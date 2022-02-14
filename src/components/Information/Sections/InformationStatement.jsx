import React from 'react';
import InformationImage from '../../InformationImage/InformationImage';
import NumberScreen from '../../NumberScreen/NumberScreen';

//Images
import background from '@root/assets/images/information/statement.png';
import avatar from '@root/assets/images/information/statement-avatar.png';

export default function(){
    return (
        <div className='information-statement'>
           <div className="container information__container">
                <div className="information-statement__content">
                    <h2 className="information__title information-statement__title">The Statement</h2>
                    <NumberScreen 
                        title="Supply"
                        number={3333}
                        className="information-statement__ns"
                        colors={{
                            background: "rgba(255, 255, 255, 0.22)",
                            title: "#000",
                            number: "#FFF",
                            pluses: "#000"
                        }}
                    />
                    <p className="information__text information-statement__text">
                        The Statement is all about the mic-drop moment 
                        when you walk into a room looking your best. 
                        <br />
                        <br />
                        Exude artistry and confidence with The Statement 
                        Collection.
                    </p>
                </div>
                <div className="information-statement__image">
                    <InformationImage 
                        avatar={avatar}
                        backgroundImage={background}
                        colors={{
                            backBlur: "rgba(26, 30, 50, 0.2)"
                        }}
                    />
                </div>
           </div>
        </div>
    );
}