import NotificationInterface from './NotificationInterface';

class SmsNotification implements NotificationInterface {
  send(to: string, message: string): void {
    console.log(`Sending SMS to ${to}: ${message}`);
  }
}

export default SmsNotification;
