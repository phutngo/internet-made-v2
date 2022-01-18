import React from 'react';
import "./avatars.scss"
import AvatarsBackground from './AvatarsBackground';

export default function(){
    return (
        <div className="avatars" data-lazy-bg="/assets/images/avatars/background.png">
            <AvatarsBackground />
            <div className="avatars__content">
                <div className="avatars__title">
                    <i></i><i></i><i></i><i></i>
                    <h3>Avatars</h3>
                    <h2>8000</h2>
                </div>
                <p className="avatars__text">
                    Each Internet Made Avatar is unique and randomly generated from 150 
                    different traits, including expression, headwear, clothing, and more. 
                    Some are rarer than others.
                    <br/>                    
                    <br/>                 
                    F&amp;F (Friends &amp; Family) will have 1 free mint.
                    <br/>                    
                    <br/>     
                    1 qualified Internet Made NFT gives 2 reserved opportunities 
                    to buy into the 48 hr pre-sale.
                    <br/>                    
                    <br/>     
                    The Avatars are stored as ERC-721 tokens on the Ethereum 
                    blockchain and hosted on IPFS. (See Record and Proof.) 
                    Purchasing an Internet Made NFT costs 0.1 ETH on presale &amp; 
                    0.15 ETH in Public Sale.
                    <br/>                    
                    <br/>     
                    To access members-only areas such as dressing room, Internet Made
                    will need to be signed into their Metamask Wallet.
                </p>
            </div>
        </div>
    );
}