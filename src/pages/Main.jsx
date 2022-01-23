import React from 'react';
import Avatars from '@root/components/Avatars/Avatars';
import Faq from '@root/components/Faq/Faq';
import Hero from '@root/components/Hero/Hero';
import Invite from '@root/components/Invite/Invite';
import Presentation from '@root/components/Presentation/Presentation';
import Team from '@root/components/Team/Team';
import Ticker from '@root/components/Ticker/Ticker';
import Types from '@root/components/Types/Types';
import Xoxo from '@root/components/Xoxo/Xoxo';
import Footer from '@root/components/Footer/Footer';
import ImNFT from '@root/components/ImNFT/ImNFT';
import VideoContent from '@root/components/VideoContent/VideoContent';
import Release from '@root/components/Release/Release';
import Banner from '@root/components/Banner/Banner';
import Started from '@root/components/Started/Started';
import Roadmap from '@root/components/Roadmap/Roadmap';

export default function(){
    return (
        <React.Fragment>
            <Hero />
            <ImNFT />
            <VideoContent />
            <Xoxo />
            <Avatars />
            <Presentation />
            <Release />
            {/* <Banner /> */}
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