class Person<T extends number> {
  name: string;
  age: T;
  constructor(name: string, age: T) {
    this.name = name;
    this.age = age;
  }

  public getName(): string {
    return this.name;
  }

  public getAge(): T {
    return this.age;
  }
}

export default Person;
