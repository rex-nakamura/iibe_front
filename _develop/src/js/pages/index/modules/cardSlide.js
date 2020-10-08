// @flow
import Swiper from 'swiper/dist/js/swiper.min.js';

export default class cardSlide {
  /**
   * Creates an instance of Index.
   */
  constructor() {

    if (window.innerWidth < 865) {
      let swiper2 = new Swiper('.card_slide', {
        autoplay: {
          delay: 3500,
        },
        speed: 800,
        loop: true,
        navigation: {
          nextEl: '.swiper-button-next_card',
          prevEl: '.swiper-button-prev_card',
        },
        pagination: {
          el: '.swiper-pagination_card',
          type: 'bullets',
          clickable: true,
        },
      });
    }

  }

}