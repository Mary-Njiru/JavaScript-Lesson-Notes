//Constructors
function Person (name, age){
    this.name = name;
    this.age = age;
    this.greet = function(){
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old`);
    }
};

const adam = new Person('Adam', 30);

console.log({adam});
 adam.greet();

const eve = new Person('Eve', 25);
console.log({eve});
eve.children = ['Cain', 'Abel', 'Seth'];
console.log({eve});
console.log({adam});

//adding a property to be shared using the in-built method called prototype. This is also used to add properties to a class or constructor
Person.prototype.skinColor = 'black';
console.log('skin-color', adam.skinColor);

adam.skinColor = 'white';    //adding a property to adam property not the prototype
console.log({adam});
console.log({eve: eve.skinColor});     //changing eve's skin-color




