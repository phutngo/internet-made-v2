import React from 'react';
import PlusButton from '../PlusButton/PlusButton';
import "./mintbtn.scss"

export default function({ className }){
    return (
        <PlusButton 
            className={className}
            onClick={console.log.bind(null)}
            href="https://mint.internetmadenft.com"
            target="_blank"
        >
            <span>Mint</span>  
        </PlusButton>
    );
}