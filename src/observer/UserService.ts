import Observer from './Observer';
import Subject from './Subject';

class UserService implements Subject {
  private observers = new Array<Observer>();

  public registerObserver(observer: Observer): void {
    this.observers.push(observer);
  }

  public removeObserver(observer: Observer): void {
    this.observers = this.observers.filter((obs) => obs !== observer);
  }

  public notifyObservers(eventData: String): void {
    this.observers.forEach((observer) => observer.update(eventData));
  }

  // Khi người dùng đăng ký
  public registerUser(username: String): void {
    console.log('✅ User registered: ' + username);
    this.notifyObservers(username);
  }
}

export default UserService;
