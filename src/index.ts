import * as readline from 'readline';
import NotificationFactory from './factory_method/NotificationFactory/NotificationFactory';
import EmailNotificationFactory from './factory_method/NotificationFactory/EmailNotificationFactory';
import SMSNotificationFactory from './factory_method/NotificationFactory/SMSNotificationFactory';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Bắt sự kiện phím để kiểm tra phím ESC
readline.emitKeypressEvents(process.stdin);
if (process.stdin.isTTY) process.stdin.setRawMode(true);

process.stdin.on('keypress', (_, key) => {
  if (key.name === 'escape') {
    console.log('\nĐã thoát chương trình.');
    rl.close();
    process.exit(0);
  }
});

function createFactory(type: string): NotificationFactory | null {
  switch (type.toLowerCase()) {
    case 'email':
      return new EmailNotificationFactory();
    case 'sms':
      return new SMSNotificationFactory();
    default:
      return null;
  }
}

function askUser() {
  rl.question(
    'Nhập phương thức thông báo [email hoặc sms] (nhấn ESC để thoát): ',
    (answer) => {
      const factory = createFactory(answer);

      if (factory) {
        factory.sendNotification();
      } else {
        console.log(
          'Phương thức không hợp lệ. Vui lòng nhập "email" hoặc "sms".',
        );
      }

      askUser(); // lặp lại
    },
  );
}

// In hướng dẫn lần đầu
console.log('--- Ứng dụng Gửi Thông Báo ---');
console.log('Bạn có thể nhấn ESC bất kỳ lúc nào để thoát.\n');

// Bắt đầu vòng lặp
askUser();
