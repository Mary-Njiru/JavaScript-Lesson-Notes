//assignment operators
let a = 20;
let b =30;

//arithmetic operators
let add = a + b;
console.log({add});
let substract = a - b;
console.log({substract})
let division = a / b;
console.log({division});
let multiply = a * b;
console.log({multiply});

//comparison operators
let c = "20";
let looselyEqualTo = a ==c;
console.log({looselyEqualTo});//this does not check the data type only the values,thats why it returns true

let strictlyEqualTo = a ===c;
console.log({strictlyEqualTo});//checks not only the value but also data types, they should be same, hence false

let notEqualTo = a != c;
console.log({notEqualTo});//this brings out false because it is the opposite of looselyEqualTo

let strictlyNotEqualTo = a !==c;
console.log({strictlyNotEqualTo});//checks opposite of strictlyEqualTo

//increment and decrement
a++;
console.log("increment", a);
b--;
console.log("decrement", b);

//compound
let compound = a +=b;
console.log({compound});

//typeof
console.log('b',typeof b);

//type coercion. Implicit and Explicit
//Implicit coercion
let d = a * c;
console.log({d});
console.log('d- type', typeof d);

let f = +c;
console.log({f});//when we use the + sign we turns the string to a number for the value but c remains a string, f turns to a number

//Explicit coercion
console.log({c});
let e = Number(c);
console.log({e});




