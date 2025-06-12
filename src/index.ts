import Person from './Person';

const person = new Person<number>('John', 30.5);
console.log(`Name: ${person.getName()}, Age: ${person.getAge()}`);
