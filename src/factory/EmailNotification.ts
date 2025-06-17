import NotificationInterface from './NotificationInterface';

class EmailNotification implements NotificationInterface {
  send(to: string, message: string): void {
    console.log(`Sending email to ${to}: ${message}`);
  }
}

export default EmailNotification;
