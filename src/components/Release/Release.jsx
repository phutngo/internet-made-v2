import React from 'react';
import "./release.scss"

export default function(){
    return (
        <section className='release'>
            <div className="release__item">
                <h3 className="release__suptitle">RELEASE DATE:</h3>
                <h2 className="release__title">25/2/22</h2>
            </div>
            <div className="release__item">
                <h3 className="release__suptitle">PUBLIC SALE:</h3>
                <h2 className="release__title">27/2/22</h2>
            </div>
        </section>
    );
}