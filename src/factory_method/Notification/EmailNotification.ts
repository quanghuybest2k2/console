import Notification from './Notification';

class EmailNotification implements Notification {
  public send(): void {
    console.log('Logic gửi email thông báo.......');
  }
}

export default EmailNotification;
