import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import "./types.scss"

// Images
import type01 from '@root/assets/images/types/item-01.png'; 
import type02 from '@root/assets/images/types/item-02.png'; 
import type03 from '@root/assets/images/types/item-03.png'; 
import type04 from '@root/assets/images/types/item-04.png'; 
import type05 from '@root/assets/images/types/item-05.png'; 
import type01Webp from '@root/assets/images/types/type-01.webp'; 
import type02Webp from '@root/assets/images/types/type-02.webp'; 
import type03Webp from '@root/assets/images/types/type-03.webp'; 
import type04Webp from '@root/assets/images/types/type-04.webp'; 
import type05Webp from '@root/assets/images/types/type-05.webp'; 

export default function(){
    const settings = {
        slidesPerView: 3,
        slidePrevClass: "swiper-slide-active-cls",
        slideNextClass: "swiper-slide-active-cls",
        slideActiveClass: "swiper-slide-active-cls",
        centeredSlides: true,
        loop: true,
    };

    return (
        <div className="types" id="lookbook" data-lazy-bg="/assets/images/types/background.png">
            <h2 className="types__title">Lookbook</h2>
            <div className="types__container">
                <Swiper className="types__slider" {...settings}>
                    <SwiperSlide className="types__item">
                        <picture>
                            {/* <source srcSet={type01Webp} type="image/webp" /> */}
                            <img src={type01} alt="type-img"  data-swiper-parallax-scale="0.884" data-swiper-parallax-opacity="0.5"/>
                        </picture>
                    </SwiperSlide>
                    <SwiperSlide className="types__item">
                        <picture>
                            {/* <source srcSet={type02Webp} type="image/webp" /> */}
                            <img src={type02} alt="type-img"  data-swiper-parallax-scale="0.884" data-swiper-parallax-opacity="0.5"/>
                        </picture>
                    </SwiperSlide>
                    <SwiperSlide className="types__item">
                        <picture>
                            {/* <source srcSet={type03Webp} type="image/webp" /> */}
                            <img src={type03} alt="type-img"  data-swiper-parallax-scale="0.884" data-swiper-parallax-opacity="0.5"/>
                        </picture>
                    </SwiperSlide>
                    <SwiperSlide className="types__item">
                        <picture>
                            {/* <source srcSet={type04Webp} type="image/webp" /> */}
                            <img src={type04} alt="type-img"  data-swiper-parallax-scale="0.884" data-swiper-parallax-opacity="0.5"/>
                        </picture>
                    </SwiperSlide>
                    <SwiperSlide className="types__item">
                        <picture>
                            {/* <source srcSet={type05Webp} type="image/webp" /> */}
                            <img src={type05} alt="type-img"  data-swiper-parallax-scale="0.884" data-swiper-parallax-opacity="0.5"/>
                        </picture>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
}