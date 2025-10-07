/*

Part 1: Debugging Challenge
The JavaScript code below contains intentional bugs related to type conversion.
Please do the following:
  - Run the script to observe unexpected outputs.
  - Debug and fix the errors using explicit type conversion methods like  Number() ,  String() , or    Boolean()  where necessary.
  - Annotate the code with comments explaining why the fix works.

Part 2: Write Your Own Examples
Write their own code that demonstrates:
  - One example of implicit type conversion.
  - One example of explicit type conversion.

  *We encourage you to:
Include at least one edge case, like NaN, undefined, or null .
Use console.log() to clearly show the before-and-after type conversions.

*/


let result = Number("5") - 2;
console.log("The result is: " + result);

let isValid = Boolean("false");
if (isValid) {
    console.log("This is valid!");
}

let age = Number("25");
let totalAge = age + 5;
console.log("Total Age: " + totalAge);


//Implicit conversion//

let userName = "Amy";
let ageOne = 2;
let ageTwo = "6";
let totalAgeNow = ageOne + ageTwo;
console.log("This is an example of Implicit Conversion:")
currentStats = console.log( `${userName} is  ${totalAge} years old.`);


//Explicit conversion//

let userName1 = null;
/*let ageOne1 = 2;
let ageTwo1 = "6";
let totalAge1 = ageOne + Number(ageTwo);*/
console.log("This is an example of Edge Conversion:")
statusNow = console.log(`${userName} is the new  ${String(userName1)} as a string`);