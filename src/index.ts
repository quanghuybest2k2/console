import UserService from './observer/UserService';
import EmailService from './observer/emailService';
import LogService from './observer/logService';
import AdminNotificationService from './observer/adminNotificationService';

const userService = new UserService();

userService.registerObserver(new EmailService());
userService.registerObserver(new LogService());
userService.registerObserver(new AdminNotificationService());

userService.registerUser('quanghuybest2k2');
