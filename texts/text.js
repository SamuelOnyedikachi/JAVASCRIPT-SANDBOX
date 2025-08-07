var D = new Date();
new Date(milliseconds);
// Outputs: current date and time
new Date(dateString);
// Outputs: current date and time based on the string
new Date(year, /*monthIndex or */ month, day, hours, minutes, seconds, milliseconds);

console.log(D); 

var hours = D.getHours();
console.log(hours);