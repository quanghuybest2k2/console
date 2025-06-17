import Button from './Button';
import Dialog from './Dialog';
import MacButton from './MacButton';

class MacDialog extends Dialog {
  public createButton(): Button {
    return new MacButton();
  }
}

export default MacDialog;
