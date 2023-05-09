// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// First we set a variable called name to 'Dane'
// then we create an if statement that checks if the variable name is equal in type and value to 'Mary'
// if the variable 'name' IS equal to Mary we log to the console 'Hi, Mary!'
// Otherwise if the variable IS NOT equal to Mary we log to the console 'How do you do?'

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// First we make two variables, 'secret' and 'code'. 'secret' is set to equal nothing, 'code' is set to '123'
// Then we create an if statement where it checks if 'code' is equal to '123' in the case it is
// we set the variable 'secret' to the string 'super' and code to 'code * 2'
// Then we create an if statement that checks if the variable 'code' is larger than 250, if it is we change
// the variable 'super' to equal 'duper'
// we then log to the console 'secret'  which will print 'super'

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
//First we make 3 variables, 'isStudent', 'age', and 'zip', is student is a boolean which is equal to true
//age is set to an integer of 34
// zip is set to an integer of 55407
//We then create an if statement that checks if is student IS equal to true AND zip is less than 80,000
//In the case it passes we log to the console, `You're a student on the West Coast!`
//Then we and else if statement checking if 'isStudent' is false OR age is less than 30
//In which case we log to the console, 'what are your hobbies'
//Then we create a else if statement that checks if "isStudent" is equal to true, in which case we log
//to the console 'Welcome to Prime!'
//If none of the if/else if statements are true we console log 'How about the weather?'
//This will log to the console, 'Welcome to Prime!'

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;
//FIX -  The only variable getting changed in this if statement is the colorOne, the correction would be to
//add "colorTwo = 'purple';" to the line inside the if statement below setting colorOne to purple
if (mix === true) {
  colorOne = 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
const time = 4;

if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
//Fix - A couple of things, one we're checking if either temp OR time is above the limits set
//the question states 'temp is set to 40 AND time is set to 4' which would indicate they meant to use && instead


*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;

if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}

//Fix - we're checking if age is greater than minAge and if it is printing 'no entry' to correct this you'd
//swap the log statements so entry is permitted to anyone greater than min age
*/

