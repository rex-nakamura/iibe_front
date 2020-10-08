// @flow

export default class acc {
  /**
   * Creates an instance of Index.
   */
  constructor() {

    reset();

    if (window.innerWidth < 865) {
      let acc_parent;
      let acc_trigger = document.getElementsByClassName('acc_trigger');
      let acc_ctt_wrap; 
      let acc_ctt;
      let acc_close = document.getElementsByClassName('acc_close');
      for(let i = 0; i < acc_trigger.length; i++) {
        acc_trigger[i].addEventListener('click', function() {
          acc_parent = acc_trigger[i].parentNode;
          acc_ctt_wrap = acc_trigger[i].nextElementSibling;
          acc_ctt = acc_ctt_wrap.firstElementChild;
          if(acc_parent.classList.contains('is-active') == true) {
            acc_parent.classList.remove('is-active');
            acc_ctt_wrap.style.height = 0;
          } else {
            acc_parent.classList.add('is-active');
            acc_ctt_wrap.style.height = acc_ctt.clientHeight + 'px';
          }
        });
      }
      for(let i = 0; i < acc_close.length; i++) {
        acc_close[i].addEventListener('click', function() {
          if(acc_parent.classList.contains('is-active') == true) {
            acc_parent.classList.remove('is-active');
            acc_ctt_wrap.style.height = 0;
          } else {
            acc_parent.classList.add('is-active');
            acc_ctt_wrap.style.height = acc_ctt.clientHeight + 'px';
          }
        });
      }
    }

    function reset() {
      let acc_ctt_wrap = document.getElementsByClassName('acc_ctt_wrap');
      for(let i = 0; i < acc_ctt_wrap.length; i++) {
        if (window.innerWidth < 865) {
          acc_ctt_wrap[i].style.height = '0';
        } else {
          acc_ctt_wrap[i].style.height = 'auto';
        }
      }
      let acc_trigger = document.getElementsByClassName('acc_trigger');
      let acc_parent;
      for(let i = 0; i < acc_trigger.length; i++) {
        acc_parent = acc_trigger[i].parentNode;
        acc_parent.classList.remove('is-active');
      }
    }

  }

}