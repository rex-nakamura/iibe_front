import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/all';
gsap.registerPlugin(ScrollToPlugin);

/**
 * アンカーリンクスムーズスクロール
 * @export
 * @class AnchorLink
 * @param offset: fixのヘッダー等の場合合わせるピクセル、または高さを考慮する対象。
 * 例） new AnchorLink(), new AnchorLink(100), new AnchorLink('#header');
 * @param speed: スクロール速度 (ms)
 */
export default class AnchorLink {
  private offsetY: number = 0;
  private speed: number = 0;
  private offsetTarget: HTMLElement | null = null;

  constructor(offset?: number | string, speed: number = 0.6) {
    this.speed = speed;

    if (typeof offset === 'number') {
      this.offsetY = offset;
    }
    if (typeof offset === 'string') {
      this.offsetTarget = document.querySelector(offset);
    }

    if (window.location.hash) {
      const hashTarget: HTMLElement | null = document.querySelector(window.location.hash);
      if (hashTarget) {
        if ('scrollRestoration' in window.history) {
          window.history.scrollRestoration = 'manual';
        }
        this.go2DefaultTarget(hashTarget);
      }
    }

    const anchorLink: HTMLElement[] = Array.prototype.slice.call(document.querySelectorAll('a[href^="#"]'));
    for (const elem of anchorLink) {
      const href: string | null = elem.getAttribute('href');
      if (href && href.length > 1) {
        elem.addEventListener('click', this.go2Anchor, false);
      }
    }
  }

  private go2DefaultTarget = (target: HTMLElement): void => {
    let offset: number = this.offsetY;
    if (this.offsetTarget) {
      offset = this.offsetTarget.offsetHeight;
    }
    gsap.killTweensOf(window);
    gsap.set(window, { scrollTo: { x: target, y: target, offsetY: offset } });
  };

  private go2Anchor = (e: any): void => {
    let offset: number = this.offsetY;
    if (this.offsetTarget) {
      offset = this.offsetTarget.offsetHeight;
    }
    const scrollTarget: HTMLElement = document.querySelector(e.currentTarget.getAttribute('href'));
    if (!scrollTarget) return;

    gsap.killTweensOf(window);
    gsap.to(window, this.speed, { scrollTo: { x: scrollTarget, y: scrollTarget, autoKill: false, offsetY: offset }, ease: 'power1.inOut' });
    e.preventDefault();
  };
}
