import React from 'react';
import InformationImage from '../../InformationImage/InformationImage';
import NumberScreen from '../../NumberScreen/NumberScreen';

//Images
import rootsBack from '@root/assets/images/information/roots.png';
import rootsAvatar from '@root/assets/images/information/roots-avatar.png';

export default function(){
    return (
        <div className="information-roots">
            <div className="container information__container">
                <div className="information-roots__content">
                    <h2 className="information__title information-roots__title">The roots</h2>
                    <NumberScreen 
                        title="Supply"
                        number={3333}
                        className="information-roots__ns"
                        colors={{
                            background: "rgba(255, 161, 51, 0.62)",
                            title: "#000",
                            number: "#FFF",
                            pluses: "#000"
                        }}
                    />
                    <p className="information-roots__text information__text">
                        A tree is more than its colorful leaves and sturdy bark: 
                        a tree is grounded by its roots. 
                        <br />
                        <br />
                        The roots exist to provide sustenance and a strong foundation 
                        for the rest of its body.  
                    </p>
                </div>
                <div className="information-roots__image">
                    <InformationImage
                        backgroundImage={rootsBack}
                        avatar={rootsAvatar} 
                        colors={{
                            backBlur: "rgba(255, 177, 86, 0.2)"
                        }}
                    />
                </div>
            </div>
        </div>
    );
}