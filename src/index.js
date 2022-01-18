import React from 'react';
import 'swiper/css';
import './scss/style.scss';
import reactDOM from 'react-dom';
import App from './app';
import lazyLoad from './javascript/LazyLoadImages';
import {BrowserRouter as Router} from 'react-router-dom';

if(navigator.userAgent.indexOf('Mac') > 0){
    document.body.classList.add("mac-os");
}

reactDOM.render(
    <Router>
        <App />
    </Router>,
    document.getElementById("app")
);

lazyLoad();