import Observer from './Observer';

class AdminNotificationService implements Observer {
  update(username: string): void {
    console.log(`🔔 Admin được thông báo: Người dùng ${username} mới đăng ký.`);
  }
}
export default AdminNotificationService;
