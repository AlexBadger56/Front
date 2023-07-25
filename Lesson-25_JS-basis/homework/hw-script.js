console.log('Second way to use JS');

//variables naming

let name;

let userName;

let user_name;

let _name;

let $name;

/* wrong naming

 let user name;

 let let;

 let user-name;

 let @name;

 let name-for-user;*/

// Comments

/* Long 
comment*/

/* case styles

camelCase

PascalCase

snake_case
*/

// Normal

userName = prompt("What's your name?", "Username");

alert(`Hello, ${userName}!`);

//user age calc

let userYear = +prompt("Enter your year of birth");

const currentYear = 2023;

let userAge = currentYear - userYear;

alert(`Your age is ${userAge}`);

//square perimeter

let sideLength = +prompt("Enter square side length");

let perimeter = sideLength * 4;

alert(`The square perimeter is ${perimeter}`);

// Maximum

// circle area

let radius = prompt("Enter circle radius");

const pi = 3.14;

const area = pi * radius ** 2;

alert(`Circle area is ${area}`);

//speed calc

let distance = prompt("Enter distance between two cities in km");

let time = prompt("Enter the time for which you need to cover the path");

let speed = distance / time;

alert(`You need to move at the following speed: ${speed} km/h`);

//converter

let dollar = prompt("Enter the amount in dollars $");

const exchangeRate = 0.9;

let euro = dollar * exchangeRate;

alert(`Amount in euro is: ${euro} €`);
