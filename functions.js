function add (num1,num2) {
    const sum = num1 + num2;
    console.log({console:sum});  
    return {'return': sum};   
}
console.log(add(2, 3));  //yellow color shows that it is a function
add(4,5);

//Function Expressions
const substraction = function (num1, num2){
    console.log(num1-num2);
}
substraction(20,10);


//Arrow functions
const multiply = (num1,num2) => console.log(num1 *num2);  //the arrow is the function, making it an anonymus function
multiply(5,6);


//IIFE    this one you have to call it immediately  you cover it with brackets and call it with brackets next after you declare your function
(function (num1){
    console.log({num1})
    console.log('Hello')
})(50);

//Hoisting          This is calling a function before declaring it. If you use a let&const you cannot hoist. Use var, but dont use var becoz it is loose and you get bugs Use normal function

// Finding the total revenue from an array of sales
function totalRevenue(arr){
    var total = 0;
    for(var i =0; i<arr.length; i++){
        total+=arr[i];
    }
    return total;
}

var sales= [1000,2000,3000,4000];
var result = totalRevenue(sales);
console.log(result);

function totalSales(arr){
    var total = arr.reduce(function(acc,curr){
         return acc+curr;
    }, 0);
    return total;
}

var sales = [10000,20000,30000];
var result = totalSales(sales);
console.log(result);


// Capitalizing the first letter in a sentence
//write your function
function capitalizeLetter(str){

    //split the input string into an array of words
    str = str.split(" ");

    //iterate through each word in the array
    for(var i =0, x = str.length; i < x; i++ ){
        //Capitalize the first letter and concatenate it with the rest of the words
        str[i]= str[i][0].toUpperCase() + str[i].substr(1);
    }
    //Join the modified array back into a string
    return str.join(" ");
}

console.log(capitalizeLetter("today i will work very hard"));

//Write a JavaScript program to replace every character in a given string with the character following it in the alphabet.

function LetterChanges(text){
    //initialize an array by spitting the input text into individual characters
        // Initialize an array by splitting the input text into individual characters
 var s = text.split('');

        // Iterate through each character in the array
        for (var i = 0; i < s.length; i++) {
            // Caesar cipher: Shift each character by one position in the alphabet
            switch(s[i]) {
                case ' ':
                    break;
                case 'z':
                    s[i] = 'a';
                    break;
                case 'Z': 
                    s[i] = 'A';
                    break;
                default:
                    s[i] = String.fromCharCode(1 + s[i].charCodeAt(0));
            }
    
            // Convert vowels to uppercase
            switch(s[i]) {
                case 'a': case 'e': case 'i': case 'o': case 'u':
                    s[i] = s[i].toUpperCase();
            }
        }
    
        // Join the modified characters back into a string and return the result
        return s.join('');
    }

console.log(LetterChanges("PYTHON"));
console.log(LetterChanges("W3R"));
console.log(LetterChanges("php"));

// Write a JavaScript application that transforms a provided numerical value into hours and minutes.
function timeConvert(num){

//calculate the number of hours by dividing num by 60 and rounding off using Math.floor
var hours = Math.floor(num / 60);

// Calculate the remaining minutes by taking the remainder when dividing num by 60
var minutes = num % 60;

// Return the result as a string in the format of hours:minutes
return hours + ":" + minutes;
}
  
console.log(timeConvert(71));
console.log(timeConvert(111));
console.log(timeConvert(256));








