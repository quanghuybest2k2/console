import os from 'os';
import Dialog from './factory_method/Dialog';
import WindowsDialog from './factory_method/WindowsDialog';
import MacDialog from './factory_method/MacDialog';
let dialog: Dialog;

const platform = os.platform(); // 'win32', 'darwin', 'linux', etc.

if (platform === 'win32') {
  dialog = new WindowsDialog();
} else {
  dialog = new MacDialog();
}

dialog.renderWindow();
