import React, { useState } from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Autoplay, Parallax} from 'swiper';
import Socials from '../Socials/Socials';
import Header from '../Header/Header';
import "./hero.scss";

// Images
import personaje01 from '@root/assets/images/hero/personaje-01.png';
import personaje01Webp from '@root/assets/images/hero/personaje-01.webp';
import personaje02 from '@root/assets/images/hero/personaje-02.png';
import personaje02Webp from '@root/assets/images/hero/personaje-02.webp';
import personaje03 from '@root/assets/images/hero/personaje-03.png';
import personaje03Webp from '@root/assets/images/hero/personaje-03.webp';
import personaje04 from '@root/assets/images/hero/personaje-04.png';
import personaje04Webp from '@root/assets/images/hero/personaje-04.webp';
import background from '@root/assets/images/hero/background.png';
import backgroundWebp from '@root/assets/images/hero/background.webp';
import backgroundMobile from '@root/assets/images/hero/background@mobile.png';
import backgroundMobileWebp from '@root/assets/images/hero/background@mobile.webp';
import nftLabel from '@root/assets/images/hero/nft-label.png';
import verticalLine from '@root/assets/images/hero/vertical-line.png';
import horizontalLine from '@root/assets/images/hero/horizontal-line.png';
import item01 from '@root/assets/images/hero/item-01.png';
import item01Webp from '@root/assets/images/hero/item-01.webp';
import item02 from '@root/assets/images/hero/item-02.png';
import item02Webp from '@root/assets/images/hero/item-02.webp';
import item03 from '@root/assets/images/hero/item-03.png';
import item03Webp from '@root/assets/images/hero/item-03.webp';
import item04 from '@root/assets/images/hero/item-04.png';
import item04Webp from '@root/assets/images/hero/item-04.webp';
import internetMade from '@root/assets/images/hero/internet-made.png';
import MintButton from '../MintButton/MintButton';
import Sidebar from '../Sidebar/Sidebar';

function setClassActive(index, current){
    return index === current 
        ? "background-personaje active"
        : "background-personaje";
};

export default function(){
    const [backgroundIndex, setBackgroundIndex] = useState(null);

    const settings = {
        slidesPerView: 3,
        loop: true,
        centeredSlides: true,
        direction: "horizontal",
        modules: [Autoplay, Parallax],
        allowTouchMove: false,
        parallax: true,
        autoplay: {
            delay: 5000
        },
        initialSlide: 0,
        speed: 1200,
        breakpoints: {
            992: {
                direction: "vertical",
            }
        },
        onSlideChange(swiper){
            setBackgroundIndex(swiper.realIndex);
        }
    };

    return (
        <section className="hero">
            <div className="hero__back">
                <picture>
                    <source srcSet={backgroundMobileWebp} media="(max-width: 768px)" type="image/webp" />
                    <source srcSet={backgroundMobile} media="(max-width: 768px)" type="image/png" />
                    <source srcSet={backgroundWebp} type="image/webp" />
                    <img src={background} alt="background" className="background-tree" />
                </picture>
                <picture>                    
                    <source srcSet={personaje01Webp} type="image/webp" />
                    <img src={personaje01} alt="bg-personaje" className={setClassActive(0, backgroundIndex)} />
                </picture>
                <picture>           
                    <source srcSet={personaje02Webp} type="image/webp" />         
                    <img src={personaje02} alt="bg-personaje" className={setClassActive(1, backgroundIndex)} />
                </picture>
                <picture>             
                    <source srcSet={personaje03Webp} type="image/webp" />       
                    <img src={personaje03} alt="bg-personaje" className={setClassActive(2, backgroundIndex)} />
                </picture>
                <picture>          
                    <source srcSet={personaje04Webp} type="image/webp" />          
                    <img src={personaje04} alt="bg-personaje" className={setClassActive(3, backgroundIndex)} />
                </picture>
            </div>
            <div className="hero__container">
                <Header />
                <Sidebar className="hero__side" />
                <div className="hero__info">
                    <img src={nftLabel} alt="nftLabel" className="hero__nft-label" />
                    <div className="hero__info-wrapper">
                        <div className="image">
                            <img src={internetMade} alt="im" />
                        </div>
                        <p>
                            playing with <span>reality</span>
                        </p>
                    </div>
                </div>
                <div className="hero__slider">
                    <div className="hero__vertical-line fst">
                        <picture>
                            <source srcSet={horizontalLine} media="(max-width: 991px)" type="image/png" />
                            <img src={verticalLine} alt="vl" />
                        </picture>
                    </div>
                    <div className="hero__center">                        
                        <Swiper className="hero__swiper" {...settings}>
                            <SwiperSlide>
                                <div className="hero__slider-item" data-swiper-parallax-scale="1" data-swiper-parallax-opacity="0.5">
                                    <picture>
                                        <source srcSet={item01Webp} type="image/webp" />                                        
                                        <img src={item01} alt="item" />
                                    </picture>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="hero__slider-item" data-swiper-parallax-scale="1" data-swiper-parallax-opacity="0.5">
                                    <picture>
                                        <source srcSet={item02Webp} type="image/webp" />                                        
                                        <img src={item02} alt="item" />
                                    </picture>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="hero__slider-item" data-swiper-parallax-scale="1" data-swiper-parallax-opacity="0.5">
                                    <picture>
                                        <source srcSet={item03Webp} type="image/webp" />                                        
                                        <img src={item03} alt="item" />
                                    </picture>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="hero__slider-item" data-swiper-parallax-scale="1" data-swiper-parallax-opacity="0.5">
                                    <picture>
                                        <source srcSet={item04Webp} type="image/webp" />                                        
                                        <img src={item04} alt="item" />
                                    </picture>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                    <div className="hero__vertical-line lst">
                        <picture>
                            <source srcSet={horizontalLine} media="(max-width: 991px)" type="image/png" />
                            <img src={verticalLine} alt="vl" />
                        </picture>
                    </div>
                </div>
                <div className="hero__socials">
                    <MintButton className="hero__mint" />                
                    <Socials className="social__soc" />
                </div>
            </div>
        </section>
    );
}