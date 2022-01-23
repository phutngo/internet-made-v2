import React, { useState, useEffect } from 'react';
import {getData} from '@root/javascript/utils';
import "./roadmap.scss"
import RoadmapItem from './RoadmapItem';

// Images
import int from '@root/assets/images/int.gif';

export default function(){
    const [data, setData] = useState([]);

    useEffect(getData.bind(null, '/json/roadmap.json', setData), []);

    return (
        <section className="roadmap" id="roadmap">
            <div className="roadmap__container">
                <h2 className="roadmap__title">Roadmap</h2>
                <div className="roadmap__list">
                    {data.map(item => (
                        <RoadmapItem {...item} key={item.phase} />
                    ))}
                </div>
                <div className="roadmap__gif">
                    <span data-lazy-bg={int}></span>
                </div>
            </div>
        </section>
    );
}