import Button from './Button';

abstract class Dialog {
  public abstract createButton(): Button;

  public renderWindow(): void {
    let btn = this.createButton();
    btn.render();
  }
}

export default Dialog;
