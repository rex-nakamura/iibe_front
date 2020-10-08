import Util from '../util';

export default class VhController {
  constructor() {
    window.addEventListener('resize', this.onResize, Util.isPassive);
    this.onResize();
  }

  private onResize = (): void => {
    const bodyWidth: number = (document.body && document.body.clientWidth) || 0;
    document.documentElement.style.setProperty('--vw', `${bodyWidth / 100}px`);
    document.documentElement.style.setProperty('--vh', `${window.innerHeight / 100}px`);
  };
}
