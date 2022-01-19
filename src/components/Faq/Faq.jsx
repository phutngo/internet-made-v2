import React from 'react';
import "./faq.scss";

// Images
import rhombus from '@root/assets/images/faq/rhombus.png';
import corner from '@root/assets/images/faq/corner.png';
import FaqItem from './FaqItem';

const data = [
    {
        id: 0, 
        question: "1. How to mint our NFT?", 
        answer: () => (<React.Fragment>You will be able to mint Internet Made NFT on <a href="www.internetmadenft.com">www.internetmadenft.com</a> website. When you click the mint button you will be redirected to our minting subpage. If you have our whitelist role, you will need to whitelist your eth wallet (such as MetaMask) address, only then you are able to participate in the presale. Public sale will be open to everyone. </React.Fragment>)
    },
    {
        id: 1, 
        question: "2. When is the mint?", 
        answer: "TBA"
    },
    {
        id: 2, 
        question: "3. How much will mint be?", 
        answer: "TBA"
    },
    {
        id: 3, 
        question: "4. How many can you mint?", 
        answer: "You will be able to mint 2 NFTs on presale and 2 NFTs on public sale. If you are whitelisted you are guaranteed to get the NFT."
    },
    {
        id: 4, 
        question: "5. How can I get whitelisted?", 
        answer: "Because we want to create a genuine and close-knit community, we don’t give WL roles for leveling on discord. We have a worldwide moderation team which is giving out WL roles to people who are genuinely interacting with others, making fan-art & contributing to the IM community."
    },
    {
        id: 5, 
        question: "6. Which blockchain are you using?", 
        answer: "Our NFTs will be stored as tokens on Ethereum blockchain, while avatar pictures are stored on IPFS."
    },
    {
        id: 6, 
        question: "7. What can IM NFT holders expect in the future?", 
        answer: "We are constantly listening to our community & like we already pointed out, our vision & plan is not final. Having said that, we will be creating an ecosystem for IM NFT holders - staking & DAO."
    },
]

export default function(){
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