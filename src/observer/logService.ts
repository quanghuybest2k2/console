import Observer from './Observer';

class LogService implements Observer {
  update(username: string): void {
    console.log(`📝 Ghi log: Người dùng ${username} đã đăng ký.`);
  }
}
export default LogService;
