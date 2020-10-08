// @flow
import modal from './modal';
import cardSlide from './cardSlide';

export default class card {
  /**
   * Creates an instance of Index.
   */
  constructor() {

    this.use_large;
    this.use_amb;
    this.use_guest;
    this.use_shop;

    this.cardCtt = document.getElementById('mitsuketa_box_wrap');
    this.cardBtn_count = 0;
    this.cardCtt_flag_device = '';
    this.cardCtt_flag = '';
    if(window.innerWidth < 865) {
    // SP初回表示
      this.cardCtt_flag_device = 'sp';
      this.cardCtt_flag = 'sp_first';
    } else {
    // PC初回表示
      this.cardCtt_flag_device = 'pc';
      this.cardCtt_flag = 'pc_first';
    }

    this.card_getSource();

  }

  cardShop_item = (j, count, item_ws) => {
    item_ws = [];
    this.category = j[count].category;
    this.area = j[count].area;
    this.name = j[count].name;
    this.genre = j[count].genre;
    this.text_01 = j[count].text_01;
    this.image_url_01 = [];
    this.image_url_01.push(j[count].image_url_01);
    this.text_02 = j[count].text_02;
    this.image_url_02_1 = j[count].image_url_02_1;
    this.image_url_02_2 = j[count].image_url_02_2;
    this.access = j[count].access;
    this.shop_url = j[count].shop_url;
    this.facebook = j[count].facebook;
    this.twitter = j[count].twitter;
    this.instagram = j[count].instagram;
    this.baton_name = j[count].baton_name;
    this.baton_url = j[count].baton_url;
    this.baton_txt = j[count].baton_txt;
    this.dt = j[count].dt;
    this.service_01 = j[count].service_01;
    this.service_02 = j[count].service_02;

    let array = [];
    array.push('地元のお店');
    array.push(this.area);
    array.push(this.name);
    array.push(this.text_01);
    array.push(this.category);
    array.push(this.image_url_01);
    array.push('no_retweet');
    array.push('no_good');
    array.push('javascript:void(0);');
    array.push(this.dt);

    let modal_array = [];
    modal_array.push(this.genre);
    modal_array.push(this.name);
    modal_array.push(this.image_url_01);
    modal_array.push(this.text_01);
    modal_array.push(this.image_url_02_1);
    modal_array.push(this.image_url_02_2);
    modal_array.push(this.text_02);
    modal_array.push(this.access);
    modal_array.push(this.shop_url);
    modal_array.push(this.facebook);
    modal_array.push(this.twitter);
    modal_array.push(this.instagram);
    modal_array.push(this.baton_name);
    modal_array.push(this.baton_url);
    modal_array.push(this.baton_txt);
    modal_array.push(this.service_01);
    modal_array.push(this.service_02);

    item_ws.push(array);
    item_ws.push(modal_array);

    return item_ws;
  }

  item = (j, count, item_ws) => {

    let array = [];
    this.a_or_g = j[count].category1;
    this.area = j[count].category2;
    this.t_id = j[count].screen_name;
    this.txt = j[count].message;
    this.category = j[count].category3;
    this.image = [];
    this.image = j[count].image_url;
    this.retweet = j[count].retweet_count;
    this.good = j[count].good_count;
    this.url = j[count].tweet_url;
    this.dt = j[count].tweet_dt;

    array.push(this.a_or_g);
    array.push(this.area);
    array.push(this.t_id);
    array.push(this.txt);
    array.push(this.category);
    array.push(this.image);
    array.push(this.retweet);
    array.push(this.good);
    array.push(this.url);
    array.push(this.dt);
    item_ws = array;
    return item_ws;
  }

  workspace = (item01, class_ws) => {
    let txt = '';
    if(item01 == '箱根') {
      txt += 'hakone'; 
    } else if(item01 == '小田原') {
      txt += 'odawara'; 
    }
    class_ws = ' ' + txt;
    return class_ws;
  }

  create_box = (box_item, box_class, result, f, modal_item) => {
    if(f == 'shop') {
      result = `
        <div class="p-mitsuketa__box__item${ box_class } aos-init" data-aos="fade-in" data-aos-duration="1100" data-aos-once="true">
          <a class="p-mitsuketa__box__item__inner js-modal_link" href="${ box_item[8] }" target="_blank" data-modal-trigger="p-mitsuketa_modal" data-category="${ modal_item[0] }" data-name="${ modal_item[1] }" data-normal-img="${ modal_item[2][0] }" data-normal-txt="${ modal_item[3] }" data-products-img01="${ modal_item[4] }" data-products-img02="${ modal_item[5] }" data-products-txt="${ modal_item[6] }" data-info-address="${ modal_item[7] }" data-info-link="${ modal_item[8] }"  data-info-service-01="${ modal_item[15] }"  data-info-service-02="${ modal_item[16] }" data-info-facebook="${ modal_item[9] }" data-info-twitter="${ modal_item[10] }" data-info-instagram="${ modal_item[11] }" data-baton-name="${ modal_item[12] }" data-baton-link="${ modal_item[13] }" data-baton-txt="${ modal_item[14] }">
            <p class="p-mitsuketa__box__item__tag">${ box_item[0] }</p>
            <div class="p-mitsuketa__box__item__image"><img alt="" src="${ box_item[5][0] }"></div>
            <div class="p-mitsuketa__box__item__txt">
              <div class="ttl__sub">${ box_item[4] }${ box_item[1] }</div>
              <div class="ttl__main">${ box_item[3] }</div>
              <div class="name">${ box_item[2] }</div>
              <div class="icon">
                <div class="icon__item">${ box_item[6] }</div>
                <div class="icon__item">${ box_item[7]}</div>
              </div>
            </div>
          </a>
        </div>
      `;
    } else {
      result = `
        <div class="p-mitsuketa__box__item${ box_class } aos-init" data-aos="fade-in" data-aos-duration="1100" data-aos-once="true">
          <a class="p-mitsuketa__box__item__inner" href="${ box_item[8] }" target="_blank">
            <p class="p-mitsuketa__box__item__tag">${ box_item[0] }</p>
            <div class="p-mitsuketa__box__item__image"><img alt="" src="${ box_item[5][0] }"></div>
            <div class="p-mitsuketa__box__item__txt">
              <div class="ttl__sub">${ box_item[4] }${ box_item[1] }</div>
              <div class="ttl__main">${ box_item[3] }</div>
              <div class="name">${ box_item[2] }</div>
              <div class="icon">
                <div class="icon__item">${ box_item[6] }</div>
                <div class="icon__item">${ box_item[7]}</div>
              </div>
            </div>
          </a>
        </div>
      `;
    }
    return result;
  };

  sequence = (target, flag) => {
    const result = [];
    if(target != undefined) {
      for (let i = 0; i < target.length; i++) {
        // 情報とってくる
        if(flag == 'shop') {
          this.source_ws = this.cardShop_item(target, i, this.source_ctt);
          this.source = this.source_ws[0];
          this.modal_source = this.source_ws[1];
        } else {
          this.source = this.item(target, i, this.source_ctt);
        }
  
        if(window.innerWidth < 865) {
          if(flag == 'large') {
            if(this.source[3].length > 25) {
              this.source[3] = this.source[3].substr(0, 24);
              this.source[3] += '…';
            }
          } else {
            if(this.source[3].length > 23) {
              this.source[3] = this.source[3].substr(0, 22);
              this.source[3] += '…';
            }
          }
        } else {
          if(flag == 'large') {
            if(this.source[3].length > 40) {
              this.source[3] = this.source[3].substr(0, 39);
              this.source[3] += '…';
            }
          } else {
            if(this.source[3].length > 29) {
              this.source[3] = this.source[3].substr(0, 28);
              this.source[3] += '…';
            }
          }
        }
  
        if(this.source[4] == null) {
          this.source[4] = '';
        } else {
          this.source[4] = this.source[4] + ' / ';
        }
  
        if(this.source[5][0] == "") {
          this.source[5][0] = './assets/images/top/p-mitsuketa_noimg.png';
        }
  
        // クラスつくる
        this.class = this.workspace(this.source[1], this.class_ctt);
        if(flag == 'large') {
          if(this.source[0] == 'アンバサダー') {
            this.class += ' big ambassador'; 
          } else if(this.source[0] == 'ゲスト') {
            this.class += ' big guest no-icon no-name'; 
          }
        } else if(flag == 'amb') {
          this.class += ' small ambassador'; 
        } else if(flag == 'guest') {
          this.class += ' small guest no-icon no-name'; 
        } else if(flag == 'shop') {
          this.class += ' small shop no-icon'; 
        }
  
        let html = [];
        // htmlつくる
        html.push(this.create_box(this.source, this.class, this.html_ctt, flag, this.modal_source));
        html.push(this.source[9]);
  
        // 配列つくる
        result.push(html);
      }
      return result;
    }
  }

  card_array = (array, flag) => {
    if(flag == 'large') {
      this.card_large = array;
    } else if(flag == 'amb') {
      this.card_amb = array;
    } else if(flag == 'guest') {
      this.card_guest = array;
    } else if(flag == 'shop') {
      this.card_shop = array;
    }
    return 
  }

  card_getSource = async() => {
    const json = await (await fetch("https://ranaextractive.biz/iibe/api/get_tweet_user.php?count=all", { credentials: 'same-origin' })).json();
    const json2 = await (await fetch("./api/card_shop.json", { credentials: 'same-origin' })).json();
    this.use_large = await this.get_json_data(json.result.tweets_large);

    let _this = this;
    this.use_amb = await amb_choice();

    function amb_choice(){
      let a_c = [];
      if(json.result.tweets == null) {
        a_c = [];
      } else {
        a_c = _this.get_json_data(json.result.tweets);
      }
      return a_c;
    }

    this.use_shop = await this.get_json_data(json2.result.card_shop);
    this.create_card_Dom();
  };

  get_json_data = (json) => {
    const list = [];
    for(let i = 0; i < json.length; i++) {
      list.push(json[i]);
    }
    return list;
  };

  // card_btn_click
  card_btn_click = () => {
    this.cardBtn_count++;
    if(window.innerWidth < 865) {
      // SPループ表示 -------------------------------------------------
      this.cardCtt_flag_device = 'sp';
      this.cardCtt_flag = 'sp_loop';
    } else {
      this.cardCtt_flag_device = 'pc';
      if(this.cardBtn_count == 1){
        // PC初回表示 -------------------------------------------------
        this.cardCtt_flag = 'pc_first';
      } else if (this.cardBtn_count > 1) {
        // PCループ表示 -------------------------------------------------
        this.cardCtt_flag = 'pc_loop';
      }
    }
    this.create_card_Dom();
  };

  // create_card_Dom
  create_card_Dom = () => {

    if(this.use_shop != undefined) {
      let html = '';

      if (this.cardBtn_count == 0) {
        this.large = this.sequence(this.use_large, 'large');
        this.amb = this.sequence(this.use_amb, 'amb');
        this.guest = [];
        this.shop = this.sequence(this.use_shop, 'shop');
      }

      if(this.large != undefined) {
        this.large.sort(function(a,b){
          if(a[1] > b[1]) {
            return -1;
          } else {
            return 1;
          }
        });
      }
      if(this.amb != undefined) {
        this.amb.sort(function(a,b){
          if(a[1] > b[1]) {
            return -1;
          } else {
            return 1;
          }
        });
      }
      this.guest.sort(function(a,b){
        if(a[1] > b[1]) {
          return -1;
        } else {
          return 1;
        }
      });
      if(this.shop != undefined) {
        this.shop.sort(function(a,b){
          if(a[1] > b[1]) {
            return -1;
          } else {
            return 1;
          }
        });
      }

      if(this.cardCtt_flag_device == 'sp') {
        this.none_btn = false;
        if(this.cardCtt_flag == 'sp_first') {
          // sp_first
          let viewList_large = [];
          let viewList = [];

          // 1 large
          if (this.large.length > 0) {
            viewList_large.push(this.large[0][0]);
            this.large.shift();
          }
          // 2 large
          if (this.large.length > 0) {
            viewList_large.push(this.large[0][0]);
            this.large.shift();
          }
          // 3 large
          if (this.large.length > 0) {
            viewList_large.push(this.large[0][0]);
            this.large.shift();
          }
          // 4 large
          if (this.large.length > 0) {
            viewList_large.push(this.large[0][0]);
            this.large.shift();
          }

          // 1 shop
          if (this.shop.length > 0) {
            viewList.push(this.shop[0][0]);
            this.shop.shift();
          } else {
            if (this.amb.length > 0) {
              viewList.push(this.amb[0][0]);
              this.amb.shift();
            } else {
              if (this.guest.length > 0) {
                viewList.push(this.guest[0][0]);
                this.guest.shift();
              }
            }
          }
          // 2 amb
          if (this.amb.length > 0) {
            viewList.push(this.amb[0][0]);
            this.amb.shift();
          } else {
            if (this.guest.length > 0) {
              viewList.push(this.guest[0][0]);
              this.guest.shift();
            } else {
              if (this.shop.length > 0) {
                viewList.push(this.shop[0][0]);
                this.shop.shift();
              }
            }
          }
          // 3 shop
          if (this.shop.length > 0) {
            viewList.push(this.shop[0][0]);
            this.shop.shift();
          } else {
            if (this.amb.length > 0) {
              viewList.push(this.amb[0][0]);
              this.amb.shift();
            } else {
              if (this.guest.length > 0) {
                viewList.push(this.guest[0][0]);
                this.guest.shift();
              }
            }
          }
          // 4 amb
          if (this.amb.length > 0) {
            viewList.push(this.amb[0][0]);
            this.amb.shift();
          } else {
            if (this.guest.length > 0) {
              viewList.push(this.guest[0][0]);
              this.guest.shift();
            } else {
              if (this.shop.length > 0) {
                viewList.push(this.shop[0][0]);
                this.shop.shift();
              }
            }
          }
          // 5 shop
          if (this.shop.length > 0) {
            viewList.push(this.shop[0][0]);
            this.shop.shift();
          } else {
            if (this.amb.length > 0) {
              viewList.push(this.amb[0][0]);
              this.amb.shift();
            } else {
              if (this.guest.length > 0) {
                viewList.push(this.guest[0][0]);
                this.guest.shift();
              }
            }
          }
          // 6 amb
          if (this.amb.length > 0) {
            viewList.push(this.amb[0][0]);
            this.amb.shift();
          } else {
            if (this.guest.length > 0) {
              viewList.push(this.guest[0][0]);
              this.guest.shift();
            } else {
              if (this.shop.length > 0) {
                viewList.push(this.shop[0][0]);
                this.shop.shift();
              }
            }
          }

          html += `
            <div class="p-mitsuketa__box">
              <div class="slide">
                <div class="swiper-container card_slide swiper-container-horizontal">
                  <div class="swiper-wrapper" style="transform: translate3d(-1260px, 0px, 0px); transition-duration: 800ms;">
          `;
          for(var i = 0; i < viewList_large.length; i++) {
            html += '<div class="swiper-slide">' + viewList_large[i] + '</div>';
          }
          html += `
                  </div>
                </div>
                <div class="swiper-button-prev swiper-button-prev_card"></div>
                <div class="swiper-button-next swiper-button-next_card"></div>
                <div class="swiper-pagination swiper-pagination_card"></div>
              </div>
              <div class="small_box">
                ${ viewList[0] }
                ${ viewList[1] }
                ${ viewList[2] }
                ${ viewList[3] }
                ${ viewList[4] }
                ${ viewList[5] }
              </div>
            </div>
          `;
        } else if(this.cardCtt_flag == 'sp_loop') {
          // sp_loop
          if (this.cardBtn_count == 1) {
            this.viewAllList = this.amb.concat(this.guest).concat(this.shop);
            this.viewAllList.sort(function(a,b){
              if(a[1] > b[1]) {
                return -1;
              } else {
                return 1;
              }
            });
          }

          html += `
            <div class="p-mitsuketa__box">
              <div class="small_box">
          `;
          var forCount = 6;
          if (this.viewAllList.length < 6) {
            forCount = this.viewAllList.length;
            this.cardBtn.style.display = 'none';
          }
          for(var i = 0; i < forCount; i++) {
            html += `
              ${ this.viewAllList[i][0] }
            `;
          }
          html += `
              </div>
            </div>
          `;

          this.viewAllList.splice(0,6);
        }
      } else if(this.cardCtt_flag_device == 'pc') {
        this.none_btn = false;
        if(this.cardCtt_flag == 'pc_first') {
          let viewList_large = [];
          let viewList = [];
          // 1 large
          if(this.large.length > 0) {
            viewList_large.push(this.large[0][0]);
            this.large.shift();
          }
          // 2 amb
          if (this.amb.length > 0) {
            viewList.push(this.amb[0][0]);
            this.amb.shift();
          } else {
            if (this.guest.length > 0) {
              viewList.push(this.guest[0][0]);
              this.guest.shift();
            } else {
              if (this.shop.length > 0) {
                viewList.push(this.shop[0][0]);
                this.shop.shift();
              }
            }
          }
          // 3 shop
          if (this.shop.length > 0) {
            viewList.push(this.shop[0][0]);
            this.shop.shift();
          } else {
            if (this.amb.length > 0) {
              viewList.push(this.amb[0][0]);
              this.amb.shift();
            } else {
              if (this.guest.length > 0) {
                viewList.push(this.guest[0][0]);
                this.guest.shift();
              }
            }
          }
          // 4 amb
          if (this.amb.length > 0) {
            viewList.push(this.amb[0][0]);
            this.amb.shift();
          } else {
            if (this.guest.length > 0) {
              viewList.push(this.guest[0][0]);
              this.guest.shift();
            } else {
              if (this.shop.length > 0) {
                viewList.push(this.shop[0][0]);
                this.shop.shift();
              }
            }
          }
          // 5 amb
          if (this.amb.length > 0) {
            viewList.push(this.amb[0][0]);
            this.amb.shift();
          } else {
            if (this.guest.length > 0) {
              viewList.push(this.guest[0][0]);
              this.guest.shift();
            } else {
              if (this.shop.length > 0) {
                viewList.push(this.shop[0][0]);
                this.shop.shift();
              }
            }
          }
          // 6 shop
          if (this.shop.length > 0) {
            viewList.push(this.shop[0][0]);
            this.shop.shift();
          } else {
            if (this.amb.length > 0) {
              viewList.push(this.amb[0][0]);
              this.amb.shift();
            } else {
              if (this.guest.length > 0) {
                viewList.push(this.guest[0][0]);
                this.guest.shift();
              }
            }
          }
          // 7 shop
          if (this.shop.length > 0) {
            viewList.push(this.shop[0][0]);
            this.shop.shift();
          } else {
            if (this.amb.length > 0) {
              viewList.push(this.amb[0][0]);
              this.amb.shift();
            } else {
              if (this.guest.length > 0) {
                viewList.push(this.guest[0][0]);
                this.guest.shift();
              }
            }
          }
          // 8 amb
          if (this.amb.length > 0) {
            viewList.push(this.amb[0][0]);
            this.amb.shift();
          } else {
            if (this.guest.length > 0) {
              viewList.push(this.guest[0][0]);
              this.guest.shift();
            } else {
              if (this.shop.length > 0) {
                viewList.push(this.shop[0][0]);
                this.shop.shift();
              }
            }
          }
          // 9 amb
          if (this.amb.length > 0) {
            viewList.push(this.amb[0][0]);
            this.amb.shift();
          } else {
            if (this.guest.length > 0) {
              viewList.push(this.guest[0][0]);
              this.guest.shift();
            } else {
              if (this.shop.length > 0) {
                viewList.push(this.shop[0][0]);
                this.shop.shift();
              }
            }
          }
          // 10 large
          if(this.large.length > 0) {
            viewList_large.push(this.large[0][0]);
            this.large.shift();
          }

          if(this.large.length <= 0 && this.amb.length <= 0 && this.guest.length <= 0 && this.shop.length <= 0) {
            this.none_btn = true;
          }

          html += `
            <div class="p-mitsuketa__box">
              <div class="left_box">
          `;

          if(viewList_large[0] != undefined) {
            html += `
              ${ viewList_large[0] }
            `;
          }
          if(viewList[2] != undefined) {
            html += `
              ${ viewList[2] }
            `;
          }
          if(viewList[3] != undefined) {
            html += `
              ${ viewList[3] }
            `;
          }
          if(viewList[6] != undefined) {
            html += `
              ${ viewList[6] }
            `;
          }
          if(viewList[7] != undefined) {
            html += `
              ${ viewList[7] }
            `;
          }

          html += `
            </div>
            <div class="right_box">
          `;

          if(viewList[0] != undefined) {
            html += `
              ${ viewList[0] }
            `;
          }
          if(viewList[1] != undefined) {
            html += `
              ${ viewList[1] }
            `;
          }
          if(viewList[4] != undefined) {
            html += `
              ${ viewList[4] }
            `;
          }
          if(viewList[5] != undefined) {
            html += `
              ${ viewList[5] }
            `;
          }
          if(viewList_large[1] != undefined) {
            html += `
              ${ viewList_large[1] }
            `;
          }
          html += `
              </div>
            </div>
          `;
        } else if(this.cardCtt_flag == 'pc_loop') {
          if (this.cardBtn_count == 2) {
            this.viewAllList = this.amb.concat(this.guest).concat(this.shop);
            this.viewAllList.sort(function(a,b){
              if(a[1] > b[1]) {
                return -1;
              } else {
                return 1;
              }
            });
          }

          html += `
            <div class="p-mitsuketa__box">
              <div class="pc_loop_box">
          `;
          var forCount = 12;
          if (this.viewAllList.length < 13) {
            forCount = this.viewAllList.length;
            this.cardBtn.style.display = 'none';
          }
          for(var i = 0; i < forCount; i++) {
            html += `
              ${ this.viewAllList[i][0] }
            `;
          }
          html += `
              </div>
            </div>
          `;

          this.viewAllList.splice(0,12);
        }
      }
      this.cardCtt.innerHTML += html;
      if(this.cardBtn_count == 0) {
        this.cardCtt.insertAdjacentHTML('beforeend', '<div class="more__btn hover aos-init" id="mitsuketa_more_btn" data-aos="fade-in" data-aos-duration="1100" data-aos-once="true" data-aos-delay="100">もっと見る</div>');
      }
      
      this.cardBtn = document.getElementById('mitsuketa_more_btn');

      if(this.none_btn == true) {
        this.cardBtn.style.display = 'none';
      }

      this.cardBtn.addEventListener('click', this.card_btn_click);

      this.modal = new modal();

      if(window.innerWidth < 865) {
        this.cardSlide = new cardSlide();
      }

    }
  };

}