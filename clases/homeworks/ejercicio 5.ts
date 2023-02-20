class Person {
     name: string;
     age: number;
     mail: string;
    constructor(name: string, age: number, mail: string) {
      this.name = name;
      this.age = age;
      this.mail = mail;
    }
  }
  
  class Student extends Person {
    regular: boolean;
    
    constructor(name: string, age: number, mail: string) {
      super(name, age, mail);
      this.regular = true;
    }
    
    getFullInfo() {
      return `${this.name} (${this.age} years old) - ${this.regular ? 'regular' : 'not regular'}`;
    }
  }
  
  const student = new Student("Franco", 26, '');
  
  student.getFullInfo(); // "Franco (26 years old) - not regular"
  student.name; // Property 'name' is protected and only accessible within class 'Person' and its subclasses
  student.age; // Property 'age' is protected and only accessible within class 'Person' and its subclasses.
  student.regular; // Property 'regular' is private and only accessible within class 'Student'

//proba como cambiar los modificadores de atributos de la clase!
  export {}