import React from 'react';
import InformationImage from '../../InformationImage/InformationImage';
import NumberScreen from '../../NumberScreen/NumberScreen';

//Images
import background from '@root/assets/images/information/frost.png';
import avatar from '@root/assets/images/information/frost-avatar.png';

export default function(){
    return (
        <div className='information-frost'>
            <div className="container information__container">
                <div className="information-frost__content">
                    <h2 className="information__title information-frost__title">The Frost</h2>
                    <NumberScreen 
                        title="supply"
                        number={3333}
                        className="information-frost__ns"
                        colors={{
                            background: "rgba(71, 195, 231, 0.4)",
                            title: "#FFF",
                            number: "#47C3E7",
                            pluses: "#FFF"
                        }}
                    />
                </div>
                <p className="information__text information-frost__text">
                    An ice age is a sweeping drop in global temperatures, 
                    causing glacial expansion that could last hundreds of 
                    millions of years. 
                    <br />
                    <br />
                    Just like the terrifying yet beautiful force of an ice age, 
                    our capsule collection will leave a lasting mark on the world.
                </p>
                <div className="information-frost__image">
                    <InformationImage 
                        avatar={avatar}
                        backgroundImage={background}
                        colors={{
                            backBlur: "rgba(26, 30, 50, 0.3)"
                        }}
                    />
                </div>
            </div>
        </div>
    );
}