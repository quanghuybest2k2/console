import Button from './Button';
import Dialog from './Dialog';
import WindowsButton from './WindowsButton';

class WindowsDialog extends Dialog {
  public createButton(): Button {
    return new WindowsButton();
  }
}
export default WindowsDialog;
