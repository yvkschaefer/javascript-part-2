/*Q1. Create a function that can be used with `sort`. This function should take two strings, and return 
a value that sort can use to determine which is the longest string. Finally, create an array of 
strings and try to get it sorted using your new function.*/
/*
var lakes = ['Huron', 'Erie', 'Ontario', 'Michigan', 'Superior'];
var birds = ['big', 'ostrich'];

function sortString(string1, string2){
    if(string1.length > string2.length){
        return -1        
    }
    if(string1.length < string2.length){
        return 1
    }
    else {
        return 0
    }
}

console.log(lakes.sort(sortString));
console.log(birds.sort(sortString));
*/




/*Q2. Create an array of objects (don’t need to use `new` here, just regular object literals). 
These objects will contain a `name` and `email` property. Then, run some code that will sort your 
array by the longest name. Then, run some code that will sort your array by e-mail address in 
alphabetical order.*/
/*
var susan = {
    name: 'Susan Sharp',
    email: 'susharp@gmail.com'
};

var peter = {
    name: 'Peter Griffin',
    email: 'pgriffin@gmail.com'
};

var bigBird = {
    name: 'Big Bird',
    email: 'sesamepride@gmail.com'
};

var mooshoo = {
    name: 'Mooshoo',
    email: 'donkeykong@gmail.com'
};

var contacts = [susan, peter, bigBird, mooshoo];

function longestName(contact1, contact2){
    if (contact1.name.length > contact2.name.length){
        return -1  
    }
    else if (contact1.name.length < contact2.name.length){
        return 1        
    }
        return 0
}

function emailSort(contact1, contact2){
    if (contact1.email > contact2.email){
        return 1
    }
    else if (contact1.email < contact2.email){
        return -1
    }
        return 0
}
console.log(contacts.sort(longestName)); //Peter Griffin, Susan Sharp, Bid Bird, Mooshoo

console.log('thanks for sorting me by the longestName, now please sort me by the email alphabetically');


console.log(contacts.sort(emailSort)); //donkeykong@gmail.com, pgriffin@gmail.com, sesamepride@gmail.com, susharp@gmail.com
*/




/*Q3. Create a function that can be used with [`Array.prototype.map`]
(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map). 
This function should take a number and return its square. Then, use this function with map on an 
array of numbers to check the result.*/
/*
var myArray = [9, 121, 225];


function returnSquare(arr){
    return arr.map(Math.sqrt);
}

console.log(returnSquare(myArray));
*/






/*Q4. Create a function that can be used with `Array.prototype.map`. This function should be able to 
take an object and square its “num” property. Then, use this function with map on an array of 
objects each containing a “num” property.*/
/*
var arrayObjectsABC = [{num: 2}, {num:8}, {num: 5}];

function numSquared(obj) {
    return obj.num * obj.num;
}

console.log(arrayObjectsABC.map(numSquared));
*/





/*In a previous workshop, you had to create a function that took two numbers and an operation 
(add, sub, mult, …) and returned the result of the operation on the two numbers. Here we are going 
to do the same but at a higher order.*/ 

/*Q5. Create a function called `operationMaker` that takes only a string called `operation` as 
argument. This string could be `“add”`, `“subtract”`, `“mult”` or `“div”`. Your function will 
**return a function** that will take two numbers and return the result of running operation on 
these numbers. The end result should let me do something like this:
    ```javascript
var adder = operationMaker(“add”);
var sum = adder(5, 10); //15

var multiplier = operationMaker(“mult”);
var product = mult(5, 10); // 50
```*/

function operationMaker(operation){
    if (operation === 'add'){
        return function(num1, num2){
            return num1 + num2;
        }
    }
    else if (operation === 'subtract'){
        return function(num1, num2){
            return num1 - num2;
        }
    }
    else if (operation === 'mult'){
        return function(num1, num2){
            return num1 * num2;
        }
    }
    else if (operation === 'div'){
        return function(num1, num2){
            return num1 / num2;
        }
    }
    else {
        return 0
    }
}
var opAdd = operationMaker('add');
var opSubt = operationMaker('subtract');
var opMult = operationMaker('mult');
var opDiv = operationMaker('div');

console.log(opAdd(opMult(2,4),4)); //12
console.log(opDiv(15,5)); //3
console.log(opSubt(opAdd(2,2),3)); //1