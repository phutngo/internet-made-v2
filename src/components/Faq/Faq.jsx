import React from 'react';
import {getData} from '@root/javascript/utils';
import "./faq.scss";

// Images
import rhombus from '@root/assets/images/faq/rhombus.png';
import corner from '@root/assets/images/faq/corner.png';
import FaqItem from './FaqItem';
import { useState } from 'react';
import { useEffect } from 'react';

export default function(){
    const [data, setData] = useState([]);

    useEffect(getData.bind(null, '/json/faq.json', setData), []);

    return (
        <section className="faq" id="faq">
            <h2 className="faq__title">
                <i></i><i></i><i></i><i></i>
                <span>Faq</span>
            </h2>
            <div className="faq__limiter">                
                <div className="faq__container container">
                    <img src={rhombus} alt="rhombus" className="faq__rhombus faq__rhombus_1" />
                    <img src={rhombus} alt="rhombus" className="faq__rhombus faq__rhombus_2" />
                    <img src={rhombus} alt="rhombus" className="faq__rhombus faq__rhombus_3" />
                    <img src={rhombus} alt="rhombus" className="faq__rhombus faq__rhombus_4" />
                    <div className="faq__wrapper">
                        <img src={corner} alt="corner" className="faq__corner faq__corner_1" />
                        <img src={corner} alt="corner" className="faq__corner faq__corner_2" />
                        <img src={corner} alt="corner" className="faq__corner faq__corner_3" />
                        <img src={corner} alt="corner" className="faq__corner faq__corner_4" />
                        <div className="faq__content">
                            {data.map(item => (
                                <FaqItem key={item.id} {...item} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}