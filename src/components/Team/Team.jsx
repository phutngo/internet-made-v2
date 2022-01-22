import React, { useState, useEffect }  from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {getData} from '@root/javascript/utils';
import TeamItem from './TeamItem';
import "./team.scss"

export default function(){
    const [isSwiper, setIsSwiper] = useState(false);
    const [data, setData] = useState([]);

    const settings = {
        slidesPerView: 3,
        loop: true,
        centeredSlides: true,
        observe: true,
        observeParents: true
    };

    const resizeHandler = () => {
        setIsSwiper(window.innerWidth <= 768 && data.length !== 0);
    };

    useEffect(() => {       
        window.addEventListener("resize", resizeHandler);

        return () => window.removeEventListener("resize", resizeHandler);
    }, [data]);

    useEffect(() => {
        getData('/json/team.json', setData).then((dataObject) => setIsSwiper(dataObject.length !== 0));
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