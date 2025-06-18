import Observer from './Observer';

class EmailService implements Observer {
  update(username: string): void {
    console.log(`📧 Gửi email chào mừng đến ${username}`);
  }
}
export default EmailService;
