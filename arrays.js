let fruits = ['Mango','Apple','Banana','Orange']; 

let array = new Array(20,30,6,7);

console.log({fruits});
console.log({array});

fruits[1]=3;
console.log({fruits});
console.log('length',fruits.length);

let addLast = fruits.push('Kiwi');    //This method adds an element to the last item of an array
console.log({fruits});
let addFirst = fruits.unshift('Pawpaw');    //The unshift method adds an item to the first item of the array
console.log({fruits});
let removeLast = fruits.pop();         //The pop method removes last item in an array
console.log({fruits});
let removeFirst = fruits.shift();      //It removes first element in an array
console.log({fruits});

//how to add all items in an array. Reduce, map, for Each.
let items = [20,30,40,50,60];

let add = items.reduce((acc,curr) => acc +curr);    //just returns the value It does not return them in an array
console.log({add});

let multiply = items.map(item => item*3);      //returns values in an array.
console.log({multiply});

let addEach = [];    //enables us to get the return values in the array, because the question says we add each item by 2 and return an array
let total = 0;      //we declare the variable 0 to not corrupt our array when we are adding
items.forEach(item => {              //if we use forEach we do not return, those words after item and arrow
    const add = item +2;
    console.log({add});
    addEach.push(add);
    total +=item
});
console.log({addEach});
console.log({total});


let multiplyAll = 1     //we use variable 1 in multipication because we need to multipy each number with 1 by itself, before it goes to the second value to multiply with the next value

items.map(item => {
    multiplyAll *= item;
    return item
});
console.log({multiplyAll});

//Array destructuring to give every item a variable
let [num1,num2,num3,...rest]=items;       //we use ...rest to assign the other values remaining a value called rest.
console.log({num1});
console.log({num2});
console.log({num3});
console.log({rest})

