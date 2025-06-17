import Notification from './Notification';

class SmsNotification implements Notification {
  public send(): void {
    console.log('Logic gửi SMS thông báo.......');
  }
}

export default SmsNotification;
