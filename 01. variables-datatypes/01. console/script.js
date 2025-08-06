console.log(100);

console.log("Hello World");

console.log("Hello", 200, true);

const x = 100;
const y = 200;  
console.log(x + y);
console.warn("This is a warning message");
console.error("This is an error message");
console.table({name: "John", age: 30, city: "New York", email: 'samuel@gmail.com' });
console.group("Group 1");
console.log("Message 1");
console.log("Message 2");
console.error("Error message");
console.warn("Warning message");
console.groupEnd();

const styles = 'padding: 10px; background-color: #f0f0f0; color: green; font-size: 16px;';
console.log('%cThis is a styled message', styles);