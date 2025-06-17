import NotificationFactory from './factory/NotificationFactory';

const notify = (type: string, email: string, message: string) => {
  const notification = NotificationFactory.create(type);
  if (notification) {
    notification.send(email, message);
  } else {
    console.error('Notification type not supported');
  }
};

notify('email', 'quanghuybest@gmail.com', 'Chào, thông báo test đến email!');
notify('sms', '0987654321', 'Chào, thông báo test đến sms!');
