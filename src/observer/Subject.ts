import Observer from './Observer';

interface Subject {
  registerObserver(observer: Observer): void;
  removeObserver(observer: Observer): void;
  notifyObservers(eventName: String): void;
}
export default Subject;
