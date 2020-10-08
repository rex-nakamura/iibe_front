// @flow
import Swiper from 'swiper/dist/js/swiper.min.js';

export default class mvSlide {
  /**
   * Creates an instance of Index.
   */
  constructor() {

    let mv_slide_start = document.getElementById('mv_slide');
    if(mv_slide_start.classList.contains('start') == true) {
      setTimeout(function() {
        let swiper = new Swiper('.mv_slide', {
          slidesPerView: 1,
          effect: "fade",
          fadeEffect: {
            crossFade: true
          },
          autoplay: {
            delay: 3500,
          },
          speed: 800,
          loop: true,
          noSwiping: true,
          noSwipingClass: 'no-swipe',
        });
      }, 50);
    }

  }

}