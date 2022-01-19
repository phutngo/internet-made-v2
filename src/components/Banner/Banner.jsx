import React from 'react';
import "./banner.scss"

// Images
import bannerImage from '@root/assets/images/banner.jpg';
import bannerImageWebp from '@root/assets/images/banner.webp';
import bannerImageMobile from '@root/assets/images/banner@mobile.jpg';
import bannerImageMobileWebp from '@root/assets/images/banner@mobile.webp';

export default function(){
    return (
        <section className="banner">
            <picture>
                <source source={bannerImageMobile} media="(max-width: 991px)" type="image/webp" />
                <source source={bannerImageMobileWebp} media="(max-width: 991px)" type="image/png" />
                <source source={bannerImageWebp} type="image/webp" />
                <img src={bannerImage} alt="banner" />
            </picture>
        </section>
    );
}