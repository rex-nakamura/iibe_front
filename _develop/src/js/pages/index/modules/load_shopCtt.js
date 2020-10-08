// @flow
import shop_sort from './shop_sort';

export default class load_shopCtt {
  /**
   * Creates an instance of Index.
   */
  constructor() {

    this.shopCtt = document.getElementById('p-shops__content');

    fetch("./api/shop.json", { credentials: 'same-origin' }) 
    .then((res) => {
      return res.json();
    })
    .then((json) => {
      this.create_shop_Dom(json);
    })
    .catch((error) => { throw error; });

  }

  create_shop_Dom = (json) => {
    let html = '';
    let html_array = [];
    let html_array_ctt = '';

    for (let i = 0; i < json.result.shop.length; i++) {

      let category01_json = json.result.shop[i].category_01;
      let category02_json = json.result.shop[i].category_02;
      let category03_json = json.result.shop[i].category_03;
      let class_manuscript = '';
      let class_category_result = '';
      let tag_manuscript = '';
      let area_json = json.result.shop[i].area;

      // category
      let category_array = [];
      if(category01_json != null) {
        category_array.push(category01_json);
      }
      if(category02_json != null) {
        category_array.push(category02_json);
      }
      if(category03_json != null) {
        category_array.push(category03_json);
      }
      for(let i = 0; i < category_array.length; i++) {
        class_manuscript += ' ' + this.shop_class_sort(category_array[i], class_category_result);
        tag_manuscript += '<p class="category__item">' + category_array[i] + '</p>';
      }
      if(area_json == "箱根") {
        class_manuscript += ' hakone';
      } else if(area_json == "小田原") {
        class_manuscript += ' odawara';
      } else if(area_json == "共通") {
        class_manuscript += ' hakone odawara';
      }

      html_array_ctt = `
        <a class="c-shop${ class_manuscript }" href="${ json.result.shop[i].shop_url }" target="_blank" data-show-tab="0" data-show-cb="0" data-aos="fade-in" data-aos-duration="1100" data-aos-once="true" data-aos-delay="100">
          <div class="c-shop__image">
            <img src="${ json.result.shop[i].image_url }" alt="">
          </div>
          <div class="c-shop__txt">
            <div class="category">
              ${ tag_manuscript }
            </div>
            <h3 class="name">${ json.result.shop[i].name }</h3>
            <p class="txt">${ json.result.shop[i].text }</p>
          </div>
        </a>
      `;

      html_array.push(html_array_ctt);

    }

    html_array = this.array_shuffle(html_array);

    for(let i = 0; i < html_array.length; i++) {
      html += html_array[i];
    }

    this.shopCtt.innerHTML = html;
    this.shopCtt.insertAdjacentHTML('beforeend', '<div class="more__btn shop__more__btn hover aos-init" id="shop__more__btn" data-aos="fade-in" data-aos-duration="1100" data-aos-once="true" data-aos-delay="100">もっと見る</div>');

    this.shop_sort = new shop_sort('first');
  }

  array_shuffle = (array) => {
    for (let i = array.length - 1; i >= 0; i--) {
      let rand = Math.floor(Math.random() * (i + 1));
      [array[i], array[rand]] = [array[rand], array[i]]
    }
    return array;
  };

  shop_class_sort = (target, result) => {
    if(target == 'レストラン・喫茶') {
      result += 'shop_restaurant';
    }
    if(target == 'レジャー・観光') {
      result += 'shop_leisure';
    }
    if(target == '住まい・暮らし') {
      result += 'shop_housing';
    }
    if(target == '交通') {
      result += 'shop_traffic';
    }
    if(target == 'ホテル') {
      result += 'shop_hotel';
    }
    if(target == 'ショッピング') {
      result += 'shop_shopping';
    }
    if(target == 'その他') {
      result += 'shop_other';
    }
    return result;
  };

}