let a = 'Hello';
let b = "World";
let c = `There`;//these two signs are called template literals

//To get length
console.log('length', a.length);// length starts from 1, indexing starts from 0
console.log('index', a[3]);
console.log('position', a.indexOf('o'));

a[2] = 'f';//we tried reassigning the value of l to f
console.log({a});//this means that a string is immutable, we cannot reassign its value

//Concatenation
let d = a+ ' '+b;// to have some spacing between the two strings put a space between your quotes
console.log({d});

let e = `${a} ${b}. I like coding!`;//we use template literals
console.log({e});

let f = "Glory";
let g = "AkiraChix";
let sentence = "My name is"+ " "+f+ " "+ "I am in"+ " "+g;
console.log({sentence});

let sentence2 = `My name is ${f}, I am in ${g}.`;
console.log({sentence2});
