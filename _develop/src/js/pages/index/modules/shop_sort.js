// @flow

export default class shop_sort {
  /**
   * Creates an instance of Index.
   */
  constructor(shop_sort_flag) {

    let c_shop = document.getElementsByClassName('c-shop');
    let tab_item = document.getElementsByClassName('p-shops__tab__item');
    let tab_data = 'all';
    let cb = document.querySelectorAll('[type="checkbox"]');
    let cb_restaurant = document.querySelector('[data-cb="restaurant"]');
    let cb_leisure = document.querySelector('[data-cb="leisure"]');
    let cb_housing = document.querySelector('[data-cb="housing"]');
    let cb_traffic = document.querySelector('[data-cb="traffic"]');
    let cb_hotel = document.querySelector('[data-cb="hotel"]');
    let cb_shopping = document.querySelector('[data-cb="shopping"]');
    let cb_other = document.querySelector('[data-cb="other"]');
    let more_btn = document.getElementById('shop__more__btn');
    let ss_more_btn_count = 1;

    let ss_flag = 'normal';

    this.shop_deviceFlg = 0;
    let w_width = window.innerWidth;
    if (w_width >= 865) {
      ss_flag = 'pc_load';
      this.shop_deviceFlg = 0;
    } else {
      ss_flag = 'sp_load';
      this.shop_deviceFlg = 1;
    }

    window.addEventListener('resize', () => {
      let w_width = window.innerWidth;
      if (w_width >= 865) {
        if (this.shop_deviceFlg === 1) {
          // pc
          ss_flag = 'pc_resize';
          this.shop_deviceFlg = 0;
        }
      } else {
        if (this.shop_deviceFlg === 0) {
          // sp
          ss_flag = 'sp_resize';
          this.shop_deviceFlg = 1;
        }
      }
    });

    if(shop_sort_flag == 'first') {
      // tab click
      for(let i = 0; i < tab_item.length; i++) {
        tab_item[i].addEventListener('click', function() {
          more_btn.classList.add('hide');
          let parent = document.getElementById('p-shops__content');
          let parent_h = parent.clientHeight;
          parent.style.height = parent_h + 'px';
          for(let i = 0; i < c_shop.length; i++) {
            c_shop[i].classList.remove('show');
          }
          for(let i = 0; i < tab_item.length; i++) {
            tab_item[i].classList.remove('is-active');
          }
          tab_item[i].classList.add('is-active');
          tab_watch();
          setTimeout(function() {
            parent.style.height = 'auto';
            show();
            switch_array();
          }, 100);

          ss_flag = 'tab';
        }); 
      }
  
      // checkbox click
      for(let i = 0; i < cb.length; i++) {
        cb[i].addEventListener('change', function() {
          more_btn.classList.add('hide');
          let parent = document.getElementById('p-shops__content');
          let parent_h = parent.clientHeight;
          parent.style.height = parent_h + 'px';
          for(let i = 0; i < c_shop.length; i++) {
            c_shop[i].classList.remove('show');
          }
          checkbox_watch();
          setTimeout(function() {
            parent.style.height = 'auto';
            show();
            switch_array();
          }, 100);

          ss_flag = 'cb';
        });
      }

      more_btn.addEventListener('click', function() {

        if(ss_flag != 0) {
          ss_more_btn_count = 1;
          ss_flag = 0;
        }

        let array= [];
        let show_start = 0;
        let show_end = 0;
        let core_num;
    
        for(let i = 0; i < c_shop.length; i++) {
          if(c_shop[i].getAttribute('data-show-tab') == 0 && c_shop[i].getAttribute('data-show-cb') == 0) {
            array.push(c_shop[i]);
          }
        }
        if (window.innerWidth < 865) {
          core_num = 6;
        } else {
          core_num = 9;
        }
        
        show_start = core_num * ss_more_btn_count;
        show_end = show_start + core_num;

        for(let i = 0; i < array.length; i++) {
          if(i >= show_start && i < show_end) {

            array[i].classList.remove('temporary_hide');
            array[i].classList.remove('aos-animate');
            array[i].classList.add('show');
            array[i].classList.add('first_content');

            if (window.innerWidth < 865) {
              for(let i = 0; i < (show_start + 2); i ++) {
                if(array[i] != undefined) {
                  array[i].classList.add('aos-animate');
                }
              }
            } else {
              for(let i = 0; i < (show_start + 3); i ++) {
                if(array[i] != undefined) {
                  array[i].classList.add('aos-animate');
                }
              }
            }

          }
        }

        if(show_end >= array.length) {
          more_btn.classList.add('hide');
        }

        ss_more_btn_count++;

      }); 
  
    }
  
    show();
  
    function tab_watch() {
      tab_data = document.querySelector('.p-shops__tab__item.is-active').getAttribute('data-tab');
      if(tab_data == 'hakone') {
        for(let i = 0; i < c_shop.length; i++) {
          if(c_shop[i].classList.contains('hakone')) {
            c_shop[i].setAttribute('data-show-tab', 0);
          } else {
            c_shop[i].setAttribute('data-show-tab', 1);
          }
        }
      } else if(tab_data == 'odawara') {
        for(let i = 0; i < c_shop.length; i++) {
          if(c_shop[i].classList.contains('odawara')) {
            c_shop[i].setAttribute('data-show-tab', 0);
          } else {
            c_shop[i].setAttribute('data-show-tab', 1);
          }
        }
      } else if(tab_data == 'all') {
        for(let i = 0; i < c_shop.length; i++) {
          c_shop[i].setAttribute('data-show-tab', 0);
        }
      }
    }
  
    function checkbox_watch() {
      for(let i = 0; i < c_shop.length; i++) {
        c_shop[i].setAttribute('data-show-cb', 1);
  
        if(c_shop[i].classList.contains('shop_restaurant') == true) {
          if(cb_restaurant.checked == true) {
            c_shop[i].setAttribute('data-show-cb', 0);
          }
        }
        if(c_shop[i].classList.contains('shop_leisure') == true) {
          if(cb_leisure.checked == true) {
            c_shop[i].setAttribute('data-show-cb', 0);
          }
        }
        if(c_shop[i].classList.contains('shop_housing') == true) {
          if(cb_housing.checked == true) {
            c_shop[i].setAttribute('data-show-cb', 0);
          }
        }
        if(c_shop[i].classList.contains('shop_traffic') == true) {
          if(cb_traffic.checked == true) {
            c_shop[i].setAttribute('data-show-cb', 0);
          }
        }
        if(c_shop[i].classList.contains('shop_hotel') == true) {
          if(cb_hotel.checked == true) {
            c_shop[i].setAttribute('data-show-cb', 0);
          }
        }
        if(c_shop[i].classList.contains('shop_shopping') == true) {
          if(cb_shopping.checked == true) {
            c_shop[i].setAttribute('data-show-cb', 0);
          }
        }
        if(c_shop[i].classList.contains('shop_other') == true) {
          if(cb_other.checked == true) {
            c_shop[i].setAttribute('data-show-cb', 0);
          }
        }
      }
  
      let cb_checked = document.querySelectorAll('[type="checkbox"]:checked');
      for(let i = 0; i < c_shop.length; i++) {
        if(cb_checked.length == 0) {
          c_shop[i].setAttribute('data-show-cb', 0);
        }
      }
    }
  
    function show() {
      let array = [];
      for(let i = 0; i < c_shop.length; i++) {
        c_shop[i].classList.remove('temporary_hide');
        c_shop[i].classList.remove('show');
        c_shop[i].classList.remove('no-margin');
        c_shop[i].classList.remove('first_content');
        if(c_shop[i].getAttribute('data-show-tab') == 0 && c_shop[i].getAttribute('data-show-cb') == 0) {
          array.push(c_shop[i]);
        }
      }
  
      if (window.innerWidth < 865) {
        if(array.length < 7) {
          more_btn.classList.add('hide');
        } else {
          more_btn.classList.remove('hide');
        }
      } else {
        if(array.length < 10) {
          more_btn.classList.add('hide');
        } else {
          more_btn.classList.remove('hide');
        }
      }
  
      for(let i = 0; i < array.length; i++) {
  
        if (window.innerWidth < 865) {
          if(i % 2 == 0) {
            array[i].classList.add('no-margin');
          }
        } else {
          if(i % 3 == 0) {
            array[i].classList.add('no-margin');
          }
        }
  
        if (window.innerWidth < 865) {
          if(i > 5) {
            array[i].classList.add('temporary_hide');
          } else {
            array[i].classList.add('show');
          }
        } else {
          if(i > 8) {
            array[i].classList.add('temporary_hide');
          } else {
            array[i].classList.add('show');
          }
        }
  
        array[i].classList.remove('aos-animate');
  
      }
    }
  
    function switch_array() {
      let switch_array = [];
      for(let i = 0; i < c_shop.length; i++) {
        if(c_shop[i].classList.contains('show')) {
          switch_array.push(c_shop[i]);
        }
      }
      for(let i = 0; i < switch_array.length; i++) {
        if (window.innerWidth < 865) {
          if(i < 2) {
            switch_array[i].classList.add('first_content');
            switch_array[i].classList.add('aos-animate');
          }
        } else {
          switch_array[i].classList.add('first_content');
          switch_array[i].classList.add('aos-animate');
        }
      }
    }

  }

}