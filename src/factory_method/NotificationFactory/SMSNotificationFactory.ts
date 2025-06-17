import Notification from '../Notification/Notification';
import NotificationFactory from './NotificationFactory';
import SmsNotification from '../Notification/SmsNotification';

class SMSNotificationFactory extends NotificationFactory {
  createNotification(): Notification {
    return new SmsNotification();
  }
}

export default SMSNotificationFactory;
