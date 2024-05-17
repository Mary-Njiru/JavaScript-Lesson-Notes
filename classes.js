//Classes
class Person {
    constructor(name,age){
        this.name = name;
        this.age = age;
        this.hello = function(){
            console.log('Hello World!');
        }
    };

    greet(){
        console.log(`Hello my name is ${this.name} and I am ${this.age} years old`);
    }
};
const jane = new Person('Jane', 30);
console.log({jane});
jane.greet();
console.log('prototype', Person.prototype);

Person.prototype.nationality = 'Kenyan';
console.log('nationality', jane.nationality);

jane.hello();


//Inheritance
class Student extends Person{
    constructor(name,age, school){           //adding propeties inside the student such as school
     super(name, age);
     this.school = school;
    }

    profession(){
        console.log(`I am a student at ${this.school}`);
    }
};

const amanda = new Student('Amanda', 19, 'AkiraChix');

console.log({amanda});
console.log('nationality', amanda.nationality);
amanda.greet();
amanda.profession();
