import 'picturefill';
import 'smoothscroll-for-websites'; // お好みでdisable
import objectFitImages from 'object-fit-images';
import { pathToRegexp } from 'path-to-regexp';

// js/tsどっちでもこんな感じで読めます
import VhController from './utils/logic/vh-controller';
import AnchorLink from './utils/ui/anchor-link';

/**
 * ページによってcode-splitされたJSを振り分ける仕組み
 *
 * @return {any} - module
 */
const getComponent = async () => {
  const pathname = window.location.pathname;

  if (pathToRegexp('/iibe/').exec(pathname)) {
    await import(/* webpackChunkName:"index" */ './pages/index').then((module) => {
      new module.default();
    });
  }

  /* example
   * https://github.com/pillarjs/path-to-regexp
   * http://forbeslindesay.github.io/express-route-tester/
   * :aaa は何かしか変数のように入るの意。 e.g. /news/1/ => /news/:id/
   * :aaa? は何かしか変数が入るがoptional. e.g. /news/ or /news/1/ => /news/:id?/
   */
  // pathToRegexp('/:id/:test?/').exec(pathname);
  // pathToRegexp('/contact/').exec(pathname);
};
export default class Main {
  constructor() {
    // アンカーリンク。固定ヘッダー分引くとかにも対応している。
    // 使い方はanchor-link.ts参照。
    new AnchorLink();
    new VhController();

    objectFitImages();
    getComponent();
  }
}

window.addEventListener('DOMContentLoaded', () => {
  new Main();
});
