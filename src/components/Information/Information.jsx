import React from 'react';
import InformationRoots from './Sections/InformationRoots';
import "./information.scss";
import InformationFrost from './Sections/InformationFrost';
import InformationStatement from './Sections/InformationStatement';


export default function(){
    return (
        <div className='information'>
            <InformationRoots />
            <InformationFrost />
            <InformationStatement />
        </div>
    );
}