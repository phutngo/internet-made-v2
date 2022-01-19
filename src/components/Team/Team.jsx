import React, { useState, useEffect }  from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {getData} from '@root/javascript/utils';
import TeamItem from './TeamItem';
import "./team.scss"

export default function(){
    const [isSwiper, setIsSwiper] = useState(window.innerWidth <= 768);
    const [data, setData] = useState([]);

    const settings = {
        slidesPerView: 3,
        loop: true,
        centeredSlides: true,
        initialSlide: 1
    };

    const resizeHandler = () => {
        setIsSwiper(window.innerWidth <= 768);
    };

    useEffect(() => {
        getData('/json/team.json', setData);

        window.addEventListener("resize", resizeHandler);

        return () => window.removeEventListener("resize", resizeHandler);
    }, []);

    return (
        <section className="team" id="team">
            <h2 className="team__title">
                <i></i><i></i><i></i><i></i>
                <span>Our team</span>
            </h2>
            <div className="team__container">
                {isSwiper ? (
                    <Swiper className="team__swiper" {...settings}>
                        {data.map((item) => (
                            <SwiperSlide key={item.id}>
                                <TeamItem {...item} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                ) : (
                    <div className="team__grid">
                        {data.map((item) => (
                            <TeamItem {...item} key={item.id} />
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}