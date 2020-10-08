// @flow

export default class sp_menu {
  /**
   * Creates an instance of Index.
   */
  constructor() {

    let menu = document.getElementById('menu');
    let p_links = document.getElementById('p_links');
    let menu_bg = document.getElementById('menu_bg');
    let link_item = document.querySelectorAll('#p_links a');
    let scrollPosition;

    menu.addEventListener('click', function() {
      if(menu.classList.contains('active') == true) {
        scrollPosition = document.body.getBoundingClientRect().top;
        menu.classList.remove('active');
        p_links.classList.remove('active');
        menu_bg.classList.remove('active');
        setTimeout(() => {
          document.body.classList.remove('menu-open');
          window.scrollTo(0 , -(scrollPosition));
          document.body.style.top = 0 + 'px';
        }, 50);
      } else {
        scrollPosition = window.pageYOffset;
        document.body.style.top = -(scrollPosition) + 'px';
        menu.classList.add('active');
        p_links.classList.add('active');
        setTimeout(() => {
          menu_bg.classList.add('active');
        }, 50);
        document.body.classList.add('menu-open');
      }
    });

    for(let i = 0; i < link_item.length; i++) {
      link_item[i].addEventListener('click', function() {
        scrollPosition = document.body.getBoundingClientRect().top;
        document.body.classList.remove('menu-open');
        menu.classList.remove('active');
        p_links.classList.remove('active');
        menu_bg.classList.remove('active');
        window.scrollTo(0 , -(scrollPosition));
        document.body.style.top = 0 + 'px';
      });
    }

  }

}