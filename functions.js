/*Create a function that can be used with `sort`. This function should take two strings, and return 
a value that sort can use to determine which is the longest string. Finally, create an array of 
strings and try to get it sorted using your new function.*/

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