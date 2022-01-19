import React from 'react';
import { hot } from 'react-hot-loader/root';
import { Route } from 'react-router';
import Avatars from './components/Avatars/Avatars';
import Faq from './components/Faq/Faq';
import Hero from './components/Hero/Hero';
import Invite from './components/Invite/Invite';
import Presentation from './components/Presentation/Presentation';
import Team from './components/Team/Team';
import Ticker from './components/Ticker/Ticker';
import Types from './components/Types/Types';
import Xoxo from './components/Xoxo/Xoxo';
import Footer from './components/Footer/Footer';
import ImNFT from './components/ImNFT/ImNFT';
import VideoContent from './components/VideoContent/VideoContent';
import Release from './components/Release/Release';
import Banner from './components/Banner/Banner';
import Started from './components/Started/Started';
import Roadmap from './components/Roadmap/Roadmap';

const App = () => {
    return (
        <Route path="/">
            <Hero />
            <ImNFT />
            {/* <VideoContent /> */}
            <Xoxo />
            <Avatars />
            <Presentation />
            <Release />
            <Banner />
            <Roadmap />
            <Types />
            <Faq />
            <Ticker />
            <Invite />
            <Team />
            <Started />
            <Footer />
        </Route>
    );
}
export default App;