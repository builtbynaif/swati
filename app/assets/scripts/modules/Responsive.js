import $ from 'jquery';
import slick from 'slick-carousel';

class Responsive {
    constructor() {
        this.els = $(".responsive");
        this.initSlider();
    }

    initSlider() {
        this.els.slick({
            dots: true,
            autoplay: false,
            infinite: true,
            arrows: false,
            speed: 400,
            slidesToShow: 3,
            slidesToScroll: 3,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
    },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
    },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
        });
    }
}

export default Responsive;
