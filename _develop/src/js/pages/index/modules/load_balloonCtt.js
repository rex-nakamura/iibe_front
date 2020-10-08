// @flow
import balloonSlide from './balloonSlide';

export default class load_balloonCtt {
  /**
   * Creates an instance of Index.
   */
  constructor() {

    this.balloonCtt = document.getElementById('balloonCtt');

    fetch("https://ranaextractive.biz/iibe/api/get_tweet_public.php?count=all", { credentials: 'same-origin' }) 
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        this.create_balloon_Dom(json);
      })
      .catch((error) => { throw error; });

  }

  create_balloon_Dom = (json) => {
    let html = '';
    let array = [];
  
    for(let i = 0; i < 4; i++) {
      array.push(json.result.tweets[i]);
    }
  
    for (let i = 0; i < array.length; i++) {
  
      // tweet_hash
      let hashtag_array = array[i].tweet_hash;
      let hashtag_manuscript = '';
      for(let i = 0; i < hashtag_array.length; i++) {
        if(hashtag_array[i] != "") {
          if (hashtag_array[i] == "#小田原いいべ") {
            hashtag_manuscript += '<p class="tag__item odawara">' + hashtag_array[i] + '</p>';
          } else if (hashtag_array[i] == "#箱根いいべ") {
            hashtag_manuscript += '<p class="tag__item hakone">' + hashtag_array[i] + '</p>';
          } else {
            hashtag_manuscript += '<p class="tag__item">' + hashtag_array[i] + '</p>';
          }
        }
      }
  
      // image_url
      let image_json = array[i].image_url;
      let image_manuscript_parent = '';
      let image_manuscript_child = '';
      if(image_json[0] != "") {
        if(image_json.length == 1) {
          image_manuscript_child = '<div class="swiper-slide"><img src="' + image_json + '" alt=""></div>';
          image_manuscript_parent = '<div class="slide"><div class="swiper-container balloon_slide"><div class="swiper-wrapper">' + image_manuscript_child + '</div></div></div></div>';
        } else {
          for(let i = 0; i < image_json.length; i++) {
            image_manuscript_child += '<div class="swiper-slide"><img src="' + image_json[i] + '" alt=""></div>';
          }
          image_manuscript_parent = '<div class="slide"><div class="swiper-container balloon_slide"><div class="swiper-wrapper">' + image_manuscript_child + '</div></div><div class="swiper-button-prev swiper-button-prev_balloon"></div><div class="swiper-button-next swiper-button-next_balloon"></div><div class="swiper-pagination swiper-pagination_balloon"></div></div>';
        }
      }
  
      html += `
        <li class="p-everybody__list__item" data-aos="fade-in" data-aos-duration="1100" data-aos-once="true" data-aos-delay="100">
        <a class="p-everybody__list__item__ctt" href="${ array[i].tweet_url }" target="_blank">
          <div class="p-everybody__list__item__txt">
            <p class="account">${ array[i].screen_name }</p>
            <p class="txt">${ array[i].message }</p>
            <div class="tag">
              ${ hashtag_manuscript }
            </div>
          </div>
        </a>
        ${ image_manuscript_parent }
        </li>
      `;
    }
    this.balloonCtt.innerHTML = html;
  
    this.balloonSlide = new balloonSlide();

  };

}

