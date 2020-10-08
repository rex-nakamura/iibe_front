import gsap, { TweenLite } from 'gsap';
import { ScrollToPlugin } from 'gsap/all';
gsap.registerPlugin(ScrollToPlugin);

/**
 * ページTOPへ
 * @export
 * @class Back2Top
 * @param target - querySelectorで使えるページTOP戻るボタン
 * 例) new Back2Top('#pagetop');
 * @param speed: スクロール速度 (ms)
 */
export default class Back2Top {
  private speed: number = 0;

  constructor(target: HTMLElement | null, speed = 0.6) {
    this.speed = speed;
    if (!target) return;
    target.addEventListener('click', this.go2Top, false);
  }

  private go2Top = (): void => {
    gsap.killTweensOf(window);
    gsap.to(window, this.speed, { scrollTo: { x: 0, y: 0, autoKill: false }, ease: 'power1.inOut' });
  };
}
