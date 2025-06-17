import Notification from '../Notification/Notification';

abstract class NotificationFactory {
  public abstract createNotification(): Notification;

  public sendNotification(): void {
    let notify = this.createNotification();
    notify.send();
  }
}

export default NotificationFactory;
