// Boolean
let on = true;
console.log(on);

let off = false;
console.log(off);

// Null
let empty = null;

// Undefined
let undef = undefined;
// Same as let undef;

// Numbers

let degrees = 90;

let precise = 999999999999999;
console.log(precise);

let toomuch = 9999999999999999n;
console.log(toomuch);

let notQuite = 0.2 + 0.1;
console.log(notQuite);

console.log(typeof toomuch);

// String
let stringOne = 'single quotes are cool';
let stringTwo = "double quotes";
let stringThree = 'backticks';

// Addition
let first = 1050 + 100;
// String Concatenation
let second = '1050' + '100';
console.log(first, second);

let third = 1050 + '100';
console.log(third);
console.log(typeof third);

// Challenge
let firstName = 'Jerad';
let lastName = 'Lollar';
let houseNumber = 3178505745;
let aptNumber = 1920;
let street = 'w 8th st';
let city = 'Marion';
let state = 'IN';
let zipcode = 46259;
let address = firstName + ' ' + lastName + ', ' + aptNumber + ' ' + street + ' ' + city + ' ' + state + ' ' + zipcode;
console.log(address);

// Object
let firstObject = {
    integer: 50,
    stringOne: 'Hello World',
    isRemote: true
};
console.log(firstObject);
console.log(typeof firstObject);

// Array
let firstArray = ["Spanish", "English", "Dutch", "French"];
console.log(firstArray[0]);