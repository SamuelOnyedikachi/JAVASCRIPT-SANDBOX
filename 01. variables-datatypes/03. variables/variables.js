// ways to declare a variable
// var , let , const

let firstName = "John";
let lastName = "Doe";

console.log(firstName, lastName);

 let age = 30;

 console.log(age);
// in let you initialize the variable before using it
// let is block scoped, meaning it is only accessible within the block it is defined in

// naming conventions
// only letters, numbers, underscores, and dollar signs
// can't start with a number

// Multi-word Formatting
// canelCase: firstName 
// underscore: first_name 
// pascalCase : FirstName
// lowerCase : firstname

// Re-assigning Variables
age = 31;
console.log(age);

let score;
score = 1;
console.log(score);

if(true){
    score += 1;
}

console.log(score);

const pi = 3.14;
// pi = 3.14159; // This will throw an error because const variables cannot be reassigned
console.log(pi);