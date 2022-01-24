import React from 'react';
import Header from '@root/components/Header/Header';
import Sidebar from '@root/components/Sidebar/Sidebar';
import MintContent from '@root/components/MintContent/MintContent';
import MintButton from '@root/components/MintButton/MintButton';
import './mint.scss';

// Images
import background from '@root/assets/images/mint/background.jpg';

export default function(){
    return (
        <div className="mint" data-lazy-bg={background}>
            <Header />
            <Sidebar className="mint__sidebar" />
            <MintButton className="hero__mint mint__mintbtn" />
            <MintContent />
        </div>
    );
}