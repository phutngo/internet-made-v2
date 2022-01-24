import React from 'react';
import { hideWallet } from '../../javascript/utils';
import "./mintwallet.scss";

export default function(){
    return (
        <div className="mintwallet">
            <div className="mintwallet__balance">
                <span>11.189 ETH | 7 IM</span>
            </div>
            <div className="mintwallet__wallet">
                <span>{hideWallet("0X790773d3nb30ma8DbC6")}</span>
            </div>
        </div>
    );
}