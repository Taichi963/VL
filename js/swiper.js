document.addEventListener('DOMContentLoaded', function () {
    const hero = new HeroSlider('.swiper-container');
    hero.start();
});

class HeroSlider {
    constructor(el) {
        this.el = el;
        this.swiper = this._initSwiper();
    }

    _initSwiper() {
        return new Swiper(this.el, {
            // Optional parameters
            loop: true,
            effect: 'coverflow',
            centerdSlides: true,
            slidesPerView: 1,
            speed: 1000,
            // autoplay: {
            //     delay: 4000,
            //     disableOnInteraction: false
            // }
        });
    }
    start() {
        this.swiper.params.autoplay = {
            delay: 4000,
            disableOnInteraction: false
        }
        this.swiper.autoplay.start();
    }
}
