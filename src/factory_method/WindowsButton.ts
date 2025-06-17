import Button from './Button';

class WindowsButton implements Button {
  public render(): void {
    console.log('Render nút kiểu Windows');
  }
}

export default WindowsButton;
