import EmailNotification from './EmailNotification';
import SmsNotification from './SmsNotification';
import NotificationInterface from './NotificationInterface';

class NotificationFactory {
  public static create(type: string): NotificationInterface {
    let notificationInterface = null;
    switch (type) {
      case 'email':
        notificationInterface = new EmailNotification();
        break;
      case 'sms':
        notificationInterface = new SmsNotification();
        break;
    }
    return notificationInterface as NotificationInterface;
  }
}
export default NotificationFactory;
