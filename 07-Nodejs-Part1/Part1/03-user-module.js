const circle = require("./03-1-circle") ; // no need .js extension.
const circum = require("./03-1-circle").circumference ;
const now = require("./03-1-circle").now() ; 

console.log(`The area is ${circle.getArea(5)}`);
console.log(`Circumference is ${circum(5)}`);
console.log(now.toLocaleDateString());