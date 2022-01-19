import React from 'react';
import "./banner.scss"

// Images
import bannerImage from '@root/assets/images/banner.jpg';

export default function(){
    return (
        <section className="banner">
            <img src={bannerImage} alt="banner" />
        </section>
    );
}