// @flow
import Swiper from 'swiper/dist/js/swiper.min.js';

export default class balloonSlide {
  /**
   * Creates an instance of Index.
   */
  constructor() {

    let parent = document.querySelectorAll('.p-everybody__list__item');
    let child;
    let balloon_slide;
    let pagination;
    let prev;
    let next;

    for(let bl = 0; bl < parent.length; bl++) {
      child = parent[bl].children;
      if(child.length > 1) {
        balloon_slide = child[1].querySelectorAll('.swiper-slide');
        if(balloon_slide.length == 1) {
          child[0].appendChild(child[1]);
        } else {
          balloon_slide = child[1].querySelector('.balloon_slide');
          pagination = child[1].querySelector('.swiper-pagination_balloon');
          prev = child[1].querySelector('.swiper-button-prev_balloon');
          next = child[1].querySelector('.swiper-button-next_balloon');

          balloon_slide.classList.add('balloon_slide' + bl);
          pagination.classList.add('swiper-pagination_balloon' + bl);
          prev.classList.add('swiper-button-prev_balloon' + bl);
          next.classList.add('swiper-button-next_balloon' + bl);
          let swiper3 = new Swiper('.balloon_slide' + bl, {
            loop: true,
            navigation: {
              nextEl: '.swiper-button-next_balloon' + bl,
              prevEl: '.swiper-button-prev_balloon' + bl,
            },
            pagination: {
              el: '.swiper-pagination_balloon' + bl,
              type: 'bullets',
              clickable: true,
            },
          });
        }
      } else {
        parent[bl].classList.add('no-img');
      }
    }

  }

}