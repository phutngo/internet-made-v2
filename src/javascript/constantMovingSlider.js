export default function(swiper){
    const START_POSITION = swiper.translate;
    const border = (swiper.wrapperEl.scrollWidth - swiper.width) * -1;
    let raf = null;
    let handler = null;

    function translate(){
        const next = swiper.translate - 3;
        const next_translate = next < border ? START_POSITION : next;

        swiper.setTranslate(next_translate);
        if(typeof handler === 'function'){
            handler();
        }

        raf = requestAnimationFrame(translate);
    }

    return {
        init(func = () => {}){
            handler = func;
            translate();

            return this;
        },
        start(){
            translate();

            return this;
        },
        stop(){
            cancelAnimationFrame(raf);

            return this;
        }
    }
}