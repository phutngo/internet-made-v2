import React, { useState, useEffect }  from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import TeamItem from './TeamItem';
import "./team.scss"

// Images
import personaje01 from '@root/assets/images/team/personaje-01.png';
import personaje02 from '@root/assets/images/team/personaje-02.png';
import personaje03 from '@root/assets/images/team/personaje-03.png';
import personaje04 from '@root/assets/images/team/personaje-04.png';
import personaje05 from '@root/assets/images/team/personaje-05.png';
import personaje06 from '@root/assets/images/team/personaje-06.png';
import personaje07 from '@root/assets/images/team/personaje-07.png';
import personaje08 from '@root/assets/images/team/personaje-08.png';
import personaje09 from '@root/assets/images/team/personaje-09.png';
import personaje10 from '@root/assets/images/team/personaje-10.png';
import personaje01Webp from '@root/assets/images/team/personaje-01.webp';
import personaje02Webp from '@root/assets/images/team/personaje-02.webp';
import personaje03Webp from '@root/assets/images/team/personaje-03.webp';
import personaje04Webp from '@root/assets/images/team/personaje-04.webp';
import personaje05Webp from '@root/assets/images/team/personaje-05.webp';
import personaje06Webp from '@root/assets/images/team/personaje-06.webp';
import personaje07Webp from '@root/assets/images/team/personaje-07.webp';
import personaje08Webp from '@root/assets/images/team/personaje-08.webp';
import personaje09Webp from '@root/assets/images/team/personaje-09.webp';
import personaje10Webp from '@root/assets/images/team/personaje-10.webp';

const data = [
    {
        id: 0,
        avatar: {
            png: personaje01,
            webp: personaje01Webp
        },
        prof: "Founders",
        text: "Tim Brdnik Rok Božič"
    },
    {
        id: 1,
        avatar: {
            png: personaje02,
            webp: personaje02Webp
        },
        prof: "Investors",
        text: "Andrej Podgoršek Miran Pikovnik"
    },
    {
        id: 2,
        avatar: {
            png: personaje03,
            webp: personaje03Webp
        },
        prof: "Development",
        text: "Phu Ngu Matic Conradi"
    },
    {
        id: 3,
        avatar: {
            png: personaje04,
            webp: personaje04Webp
        },
        prof: "Design Team",
        text: "TNik Preston Kristian Lara Ponebšek Hugo Skulje Lara Pikovnik Veronika"
    },
    {
        id: 4,
        avatar: {
            png: personaje05,
            webp: personaje05Webp
        },
        prof: "Discord Management",
        text: "Terah Mills Jack"
    },
    {
        id: 5,
        avatar: {
            png: personaje06,
            webp: personaje06Webp
        },
        prof: "Moderation team",
        text: "Anaximillian Luicville Badam Jocey.eth"
    },
    {
        id: 6,
        avatar: {
            png: personaje07,
            webp: personaje07Webp
        },
        prof: "Marketing Team",
        text: "Luc Primožičnik Nik Razoršek Tim Brdnik Rok Božič Maj Vrenko Deaan"
    },
    {
        id: 7,
        avatar: {
            png: personaje08,
            webp: personaje08Webp
        },
        prof: "Website Team",
        text: "QClay Agency Linux Designer "
    },
    {
        id: 8,
        avatar: {
            png: personaje09,
            webp: personaje09Webp
        },
        prof: "AR",
        text: "Rok Popovič Bor (notr.si)"
    },
    {
        id:9,
        avatar: {
            png: personaje10,
            webp: personaje10Webp
        },
        prof: "3D Figures",
        text: "Notr.si Tadej Ancin"
    },
];

export default function(){
    const [isSwiper, setIsSwiper] = useState(window.innerWidth < 768);

    const settings = {
        slidesPerView: 3,
        loop: true,
        centeredSlides: true,
    };

    const resizeHandler = () => {
        setIsSwiper(window.innerWidth < 768);
    };

    useEffect(() => {
        window.addEventListener("resize", resizeHandler);

        return () => window.removeEventListener("resize", resizeHandler);
    }, []);

    return (
        <div className="team">
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
        </div>
    );
}