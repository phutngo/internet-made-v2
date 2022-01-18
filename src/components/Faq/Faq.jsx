import React from 'react';
import "./faq.scss";

// Images
import rhombus from '@root/assets/images/faq/rhombus.png';
import corner from '@root/assets/images/faq/corner.png';
import FaqItem from './FaqItem';

const data = [
    {
        id: 0, 
        question: "1. What is an NFT?", 
        answer:  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis duis suscipit senectus varius nullam orci adipiscing. Diam justo netus sit urna, fermentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis duis suscipit senectus varius nullam orci adipiscing. Diam justo netus sit urna, fermentum."
    },
    {
        id: 1, 
        question: "2. How to purchase Internet Made NFT?", 
        answer:  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis duis suscipit senectus varius nullam orci adipiscing. Diam justo netus sit urna, fermentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis duis suscipit senectus varius nullam orci adipiscing. Diam justo netus sit urna, fermentum."
    },
    {
        id: 2, 
        question: "3. How to buy on Presale?", 
        answer:  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis duis suscipit senectus varius nullam orci adipiscing. Diam justo netus sit urna, fermentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis duis suscipit senectus varius nullam orci adipiscing. Diam justo netus sit urna, fermentum."
    },
    {
        id: 3, 
        question: "4. Total supply/distribution?", 
        answer:  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis duis suscipit senectus varius nullam orci adipiscing. Diam justo netus sit urna, fermentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis duis suscipit senectus varius nullam orci adipiscing. Diam justo netus sit urna, fermentum."
    },
    {
        id: 4, 
        question: "5. Maximum mint per wallet?", 
        answer:  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis duis suscipit senectus varius nullam orci adipiscing. Diam justo netus sit urna, fermentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis duis suscipit senectus varius nullam orci adipiscing. Diam justo netus sit urna, fermentum."
    },
    {
        id: 5, 
        question: "6. Are there different rarities?", 
        answer:  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis duis suscipit senectus varius nullam orci adipiscing. Diam justo netus sit urna, fermentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis duis suscipit senectus varius nullam orci adipiscing. Diam justo netus sit urna, fermentum."
    },
    {
        id: 6, 
        question: "7. Which Blockchain and contract address?", 
        answer:  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis duis suscipit senectus varius nullam orci adipiscing. Diam justo netus sit urna, fermentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis duis suscipit senectus varius nullam orci adipiscing. Diam justo netus sit urna, fermentum."
    },
    {
        id: 7, 
        question: "8. What is a Fashion Accelerator?", 
        answer:  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis duis suscipit senectus varius nullam orci adipiscing. Diam justo netus sit urna, fermentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis duis suscipit senectus varius nullam orci adipiscing. Diam justo netus sit urna, fermentum."
    },
    {
        id: 8, 
        question: "9. What is F&F?", 
        answer:  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis duis suscipit senectus varius nullam orci adipiscing. Diam justo netus sit urna, fermentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis duis suscipit senectus varius nullam orci adipiscing. Diam justo netus sit urna, fermentum."
    },
    {
        id: 9, 
        question: "10. Will there be benefits to holding multiple Internet Made NFT’s?", 
        answer:  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis duis suscipit senectus varius nullam orci adipiscing. Diam justo netus sit urna, fermentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis duis suscipit senectus varius nullam orci adipiscing. Diam justo netus sit urna, fermentum."
    },
]

export default function(){
    return (
        <div className="faq">
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
        </div>
    );
}