import Button from './Button';

class MacButton implements Button {
  public render(): void {
    console.log('Render nút kiểu macOS');
  }
}

export default MacButton;
