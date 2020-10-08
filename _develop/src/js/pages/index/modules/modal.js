// @flow

export default class modal {
  /**
   * Creates an instance of Index.
   */
  constructor() {

    let modalLink = document.getElementsByClassName('js-modal_link');
    let overlay = document.getElementById('overlay');
    let modalContents = document.getElementsByClassName('modal_contents');
    let close = document.getElementsByClassName('modal_close');
    let modalTrigger;
    let modal_inner = document.getElementsByClassName('p-modal_inner');
    let modal_bg = document.getElementsByClassName('p-modal_bg');

    let m_category = document.getElementById('m_category');
    let m_name = document.getElementById('m_name');
    let m_normal_img = document.getElementById('m_normal_img');
    let m_normal_txt = document.getElementById('m_normal_txt');
    let m_products_img01 = document.getElementById('m_products_img01');
    let m_products_img02 = document.getElementById('m_products_img02');
    let m_products_txt = document.getElementById('m_products_txt');
    let m_info_address = document.getElementById('m_info_address');
    let m_info_link = document.getElementById('m_info_link');
    let m_service_01 = document.getElementById('m_service_01');
    let m_service_02 = document.getElementById('m_service_02');
    let m_info_facebook = document.getElementById('m_info_facebook');
    let m_info_twitter = document.getElementById('m_info_twitter');
    let m_info_instagram = document.getElementById('m_info_instagram');
    let m_baton_name = document.getElementById('m_baton_name');
    let m_baton_link = document.getElementById('m_baton_link');
    let m_baton_txt = document.getElementById('m_baton_txt');

    let m_baton_link_wrap = document.getElementById('m_baton_link_wrap');
    let m_baton_wrap = document.getElementById('m_baton_wrap');

    let scrollPosition;

    for(let i = 0; i < modalLink.length; i++) {
      modalLink[i].addEventListener('click', function(e) {


        e.preventDefault();
        modalTrigger = modalLink[i].getAttribute('data-modal-trigger');

        if(modalTrigger == 'p-mitsuketa_modal') {

          m_category.innerHTML = modalLink[i].getAttribute('data-category');
          m_name.innerHTML = modalLink[i].getAttribute('data-name');
          m_normal_img.setAttribute('src', modalLink[i].getAttribute('data-normal-img'));
          m_normal_txt.innerHTML = modalLink[i].getAttribute('data-normal-txt');
          m_products_img01.setAttribute('src', modalLink[i].getAttribute('data-products-img01'));
          m_products_img02.setAttribute('src', modalLink[i].getAttribute('data-products-img02'));
          m_products_txt.innerHTML = modalLink[i].getAttribute('data-products-txt');
          m_info_address.innerHTML = modalLink[i].getAttribute('data-info-address');
          m_info_link.innerHTML = modalLink[i].getAttribute('data-info-link');
          m_info_link.setAttribute('href', modalLink[i].getAttribute('data-info-link'));
          m_info_facebook.setAttribute('href', modalLink[i].getAttribute('data-info-facebook'));
          m_info_twitter.setAttribute('href', modalLink[i].getAttribute('data-info-twitter'));
          m_info_instagram.setAttribute('href', modalLink[i].getAttribute('data-info-instagram'));
          m_baton_name.innerHTML = modalLink[i].getAttribute('data-baton-name');
          m_baton_link.innerHTML = modalLink[i].getAttribute('data-baton-link');
          m_baton_link.setAttribute('href', modalLink[i].getAttribute('data-baton-link'));
          m_baton_txt.innerHTML = modalLink[i].getAttribute('data-baton-txt');
          m_service_01.setAttribute('href', modalLink[i].getAttribute('data-info-service-01'));
          m_service_02.setAttribute('href', modalLink[i].getAttribute('data-info-service-02'));

          if(modalLink[i].getAttribute('data-products-img01') == '') {
            m_products_img01.style.display = 'none';
          } else {
            m_products_img01.style.display = 'block';
          }

          if(modalLink[i].getAttribute('data-products-img02') == '') {
            m_products_img02.style.display = 'none';
          } else {
            m_products_img02.style.display = 'block';
          }

          if(modalLink[i].getAttribute('data-info-facebook') == '') {
            m_info_facebook.style.display = 'none';
          } else {
            m_info_facebook.style.display = 'block';
          }

          if(modalLink[i].getAttribute('data-info-twitter') == '') {
            m_info_twitter.style.display = 'none';
          } else {
            m_info_twitter.style.display = 'block';
          }

          if(modalLink[i].getAttribute('data-info-instagram') == '') {
            m_info_instagram.style.display = 'none';
          } else {
            m_info_instagram.style.display = 'block';
          }

          if(modalLink[i].getAttribute('data-baton-link') == '') {
            m_baton_link_wrap.style.display = 'none';
          } else {
            if (window.innerWidth >= 865) {
              m_baton_link_wrap.style.display = 'block';
            } else {
              m_baton_link_wrap.style.display = 'flex';
            }
          }

          if(modalLink[i].getAttribute('data-baton-name') == '') {
            m_baton_wrap.style.display = 'none';
          } else {
            m_baton_wrap.style.display = 'block';
          }

          if(modalLink[i].getAttribute('data-info-service-01') == '') {
            m_service_01.style.display = 'none';
          } else {
            m_service_01.style.display = 'block';
          }

          if(modalLink[i].getAttribute('data-info-service-02') == '') {
            m_service_02.style.display = 'none';
          } else {
            m_service_02.style.display = 'block';
          }

        }

        for(let i = 0; i < modalContents.length; i++) {
          if(modalContents[i].getAttribute('data-modal-target') == modalTrigger) {
            modalContents[i].classList.add('show');
          } else {
            modalContents[i].classList.remove('show');
          }
        }
        document.body.appendChild(overlay);
        overlay.classList.add('show');
        setTimeout(function() {
          overlay.style.opacity = '1';
        }, 100);
        if (window.innerWidth < 865) {
          scrollPosition = window.pageYOffset;
          document.body.style.top = -scrollPosition;
        }
        document.body.classList.add('modal-open');
      });
    }

    for(let i = 0; i < modal_inner.length; i++) {
      modal_inner[i].addEventListener('click', function() {
        overlay.style.opacity = '0';
        setTimeout(function() {
          overlay.classList.remove('show');
        }.bind(overlay), 300);
        document.body.classList.remove('modal-open');
        if (window.innerWidth < 865) {
          document.body.style.top = 0;
          window.scrollTo(0 , scrollPosition);
        }
      });
    }

    for(let i = 0; i < modal_bg.length; i++) {
      modal_bg[i].addEventListener('click', function(e) {
        e.stopPropagation();
      });
    }

    for(let i = 0; i < close.length; i++) {
      close[i].addEventListener('click', function(e) {
        e.preventDefault();
        overlay.style.opacity = '0';
        setTimeout(function() {
          overlay.classList.remove('show');
        }, 300);
        document.body.classList.remove('modal-open');
        if (window.innerWidth < 865) {
          document.body.style.top = 0;
          window.scrollTo(0 , scrollPosition);
        }
      });
    }

  }

}