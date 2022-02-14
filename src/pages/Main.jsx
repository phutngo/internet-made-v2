import React from 'react';
import Avatars from '@root/components/Avatars/Avatars';
import Faq from '@root/components/Faq/Faq';
import Hero from '@root/components/Hero/Hero';
import Invite from '@root/components/Invite/Invite';
import Team from '@root/components/Team/Team';
import Ticker from '@root/components/Ticker/Ticker';
import Types from '@root/components/Types/Types';
import Xoxo from '@root/components/Xoxo/Xoxo';
import Footer from '@root/components/Footer/Footer';
import ImNFT from '@root/components/ImNFT/ImNFT';
import VideoContent from '@root/components/VideoContent/VideoContent';
import Started from '@root/components/Started/Started';
import Roadmap from '@root/components/Roadmap/Roadmap';
import Information from '../components/Information/Information';
import Release from '../components/Release/Release';

export default function(){
    return (
        <React.Fragment>
            <Hero />
            <ImNFT />
            <VideoContent />
            <Xoxo />
            <Avatars />
            <Release />
            <Information />
            <Roadmap />
            <Types />
            <Faq />
            <Ticker />
            <Invite />
            <Team />
            <Started />
            <Footer />            
        </React.Fragment>
    );
}