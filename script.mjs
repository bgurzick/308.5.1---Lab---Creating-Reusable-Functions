// ALAB 308.5.1 - CREATING REUSABLE FUNCTIONS

//Part 1: Thinking Functionally

// #1 - Take an array of numbers and return the sum.

const berryRandom = [4,8,16,88,94,104,6349].reduce((partialSum, Q)=>partialSum + Q, 0);
console.log(berryRandom);



const yourSumMyLiege = [4,8,16,88,94,104,6349].reduce(add, 0);

function add(summerator, Q) {
  return summerator +Q;
}

console.log("Your SUM, my liege (while genuflecting): ",yourSumMyLiege);



let arr = [4,8,16,88,94,104,6349];
let total = 0;
for (let Q in arr) {
  total += arr[Q];
}
console.log(total)


// #2 - Take an array of numbers and return the average.
let aria = [4,8,16,88,94,104,6349];
let avg = 0;
let length = aria.length;
for (let G in aria) {
    avg += aria[G]/length;
}
console.log("Your AVG, my liege: ",avg)


// #3 - Take an array of strings and return the longest string.
let lostFamily = ['freddie', 'rowie', 'ernie', 'elsie', 'richard', 'charlotte']
let lengthy = lostFamily.length

function stringReturn (longestString) {
    let longestString=lengthy;
    return longestString;
}
console.log(longestString)
// #4 - Take an array of strings, and a number and return an array of the strings that are longer than the given number. 
// For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3); would return ["hello", "morning"].
// Take a number, n, and print every number between 1 and n without using loops. Use recursion.







// Part 2: Thinking Methodically

// When functions are built into objects, like Arrays, they are referred to as “methods” of those objects. Many methods, including Array methods, require “callback functions” to determine their behavior.

// For the tasks below, use the following data to test your work:
// [{ id: "42", name: "Bruce", occupation: "Knight", age: "41" }, { id: "48", name: "Barry", occupation: "Runner", age: "25" }, { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" }, { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" }, { id: "7", name: "Bilbo", occupation: "None", age: "111" }]

// Use callback functions alongside Array methods to accomplish the following:
// #1 - Sort the array by age.
// #2 - Filter the array to remove entries with an age greater than 50.
// #3 - Map the array to change the “occupation” key to “job” and increment every age by 1.
// #4 - Use the reduce method to calculate the sum of the ages.
// #5 - Then use the result to calculate the average age.






// Part 3: Thinking Critically


// It is important to remember that when working with objects in JavaScript, we can either pass those objects into functions by value or by reference. This important distinction changes the way that functions behave, and can have large impacts on the way a program executes.

// For this section, develop functions that accomplish the following:
// #1 - Take an object and increment its age field.
// #2 - Take an object, make a copy, and increment the age field of the copy. Return the copy.

// For each of the functions above, if the object does not yet contain an age field, create one and set it to 0. Also, add (or modify, as appropriate) an updated_at field that stores a Date object with the current time.

// Thought experiment: since the Date object is an object, what would happen if we modified it in the copy of the object created in the second function using setTime() or another method? How could we circumvent potentially undesired behavior?






// Part 4: Thinking Practically

// Practical application of these concepts varies greatly in industry, but the core foundations are the same: functions handle repeated, specialized tasks, and methods are functions attached to specific types of objects.

// The Skills-Based Assessment (SBA) for this module will have you work on a real-world example that employs all of the tools you have learned thus far. To prepare for it, revisit your previous work as described below.







// Part 5: Thinking Back

// Once you have completed the tasks outlined above, take any extra time you may have to revisit your previous JavaScript assignments. 

// How many of the scripts could be turned into functions?

// What would the parameters look like? What kind of returns should they have?

// Could you package your code into even smaller blocks, creating helper functions?

// What else could be changed to optimize the code, knowing what you now know?


