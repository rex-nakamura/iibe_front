// @flow
import loadingMovie from './loadingMovie';

export default class accessCount {
  /**
   * Creates an instance of Index.
   */
  constructor() {

    let checkCookie = document.cookie;
    if(!checkCookie.match("XXX")){
      let domain = document.domain;
      let visitorCookie = "visitorCookie=XXX; max-age=86400; domain="+domain+"; path=/"
      document.cookie = visitorCookie;
      setTimeout(function() {
        this.loadingMovie = new loadingMovie();
      }, 100);
    } else {
      document.body.classList.remove('now-loading');
      let parent = document.getElementById('contents');
      let child = document.getElementById('p-loading');
      let mv_slide_start = document.getElementById('mv_slide');
      parent.removeChild(child);
      setTimeout(function() {
        mv_slide_start.classList.add('start');
      }, 600);
    }

  }

}