import Notification from '../Notification/Notification';
import NotificationFactory from './NotificationFactory';
import EmailNotification from '../Notification/EmailNotification';

class EmailNotificationFactory extends NotificationFactory {
  createNotification(): Notification {
    return new EmailNotification();
  }
}

export default EmailNotificationFactory;
