import React, { useEffect, useState } from 'react';
import classNames from 'classnames';

export default function({ question, answer }){
    const [parentRef, setParentRef] = useState(null);
    const [ref, setRef] = useState(null);
    const [open, setOpen] = useState(false);
    const [styles, setStyles] = useState({ height: 0, margin: 0 });

    const clickHandler = () => setOpen(!open);

    const closeOnClickOutTheItem = (event) => {
        if(event.target.closest(".faq-item") !== parentRef){
            setOpen(false);
        }
    };

    useEffect(() => {
        setStyles(open ? {
            height: ref.scrollHeight + "px",
            margin: "",
            opacity: 1
        } : {
            height: 0,
            margin: 0,
            opacity: 0
        });
    }, [open]);

    useEffect(() => {
        if(!parentRef) {return;}

        document.addEventListener("click", closeOnClickOutTheItem);

        return () => document.removeEventListener("click", closeOnClickOutTheItem);
    }, [parentRef]);

    return (
        <div className={classNames("faq-item", {opened: open})} onClick={clickHandler} ref={setParentRef}>
            <div className="faq-item__question">{question} <i></i></div>
            <p className="faq-item__answer" ref={setRef} style={styles}>{answer}</p>
        </div>
    );
}