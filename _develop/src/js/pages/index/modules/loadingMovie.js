// @flow

export default class loadingMovie {
  /**
   * Creates an instance of Index.
   */
  constructor() {

    let loading = document.getElementById('p-loading');
    let loading_logo = document.getElementById('p-loading__logo');
    let loading_frame = document.getElementById('p-loading__frame');
    let loading_main = document.getElementById('p-loading__main');
    let mv_slide_start = document.getElementById('mv_slide');

    setTimeout(function() {
      loading_logo.classList.add('is-active');
      loading_frame.classList.add('is-active');
    }, 70);
    setTimeout(function() {
      loading_main.classList.add('is-active');
    }, 1100);
    setTimeout(function() {
      loading_logo.classList.remove('is-active');
    }, 2100);
    setTimeout(function() {
      document.body.classList.remove('now-loading');
    }, 2800);
    setTimeout(function() {
      loading.classList.remove('is-active');
    }, 3400);
    setTimeout(function() {
      mv_slide_start.classList.add('start');
    }, 4000);

  }

}