import mvSlide from './modules/mvSlide';
import accessCount from './modules/accessCount';
import load_balloonCtt from './modules/load_balloonCtt';
import load_shopCtt from './modules/load_shopCtt';
import card from './modules/card';
import acc from './modules/acc';
import modal from './modules/modal';
import sp_menu from './modules/sp_menu';
import shop_sort from './modules/shop_sort';
import card_reset from './modules/card_reset';


export default class Index {
  /**
   * Creates an instance of Index.
   */
  constructor() {
    this.mv_slide_start = document.getElementById('mv_slide');
    this.prevClass = this.mv_slide_start.classList.toString();
    const observer = new MutationObserver(records => {
      if(this.mv_slide_start.classList.toString() === this.prevClass) return;
      this.prevClass = this.mv_slide_start.classList.toString();
      if ( this.prevClass.match(/start/)) {
        this.mvSlide = new mvSlide();
      }
    })
    const config = {
      attributes: true
    };
    observer.observe(this.mv_slide_start, config);

    this.accessCount = new accessCount();
    this.load_balloonCtt = new load_balloonCtt();
    this.load_shopCtt = new load_shopCtt();
    this.acc = new acc()
    this.modal = new modal();
    this.card = new card();
    this.deviceFlg = 0;
    this.load();
    this.resize();

    this.sp_menu = new sp_menu();

    AOS.init();
  }

  load = () => {
    window.addEventListener('load', () => {
      let w_width = window.innerWidth;
      if (w_width >= 865) {
        this.deviceFlg = 0;
      } else {
        this.deviceFlg = 1;
      }
    });
  };

  resize = () => {
    window.addEventListener('resize', () => {
      let w_width = window.innerWidth;
      if (w_width >= 865) {
        if (this.deviceFlg === 1) {
          // pc
          this.card_reset = new card_reset();
          this.shop_sort = new shop_sort('resize');
          this.acc = new acc();
          this.modal = new modal();
          this.deviceFlg = 0;
        }
      } else {
        if (this.deviceFlg === 0) {
          // sp
          this.card_reset = new card_reset();
          this.shop_sort = new shop_sort('resize');
          this.acc = new acc();
          this.modal = new modal();
          this.deviceFlg = 1;
        }
      }
    });
  };

}