// @flow
import card from './card';

export default class card_reset {
  /**
   * Creates an instance of Index.
   */
  constructor() {

    this.cardCtt = document.getElementById('mitsuketa_box_wrap');

    let target = document.querySelectorAll('#mitsuketa_box_wrap .p-mitsuketa__box');
    let btn = document.getElementById('mitsuketa_more_btn');
    for(let i = 0; i < target.length; i++) {
      this.cardCtt.removeChild(target[i]);
    }
    if(btn != null) {
      this.cardCtt.removeChild(btn);
    }

    this.cardBtn_count = 0;
    if(this.deviceFlg === 1) {
      // pc
      this.cardCtt_flag_device = 'pc';
      this.cardCtt_flag = 'pc_first';
    } else if(this.deviceFlg === 0) {
      // sp
      this.cardCtt_flag_device = 'sp';
      this.cardCtt_flag = 'sp_first';
    }

    this.card = new card();

  }

}