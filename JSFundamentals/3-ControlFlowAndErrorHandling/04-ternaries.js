let x = 8;

x > 0 
// If true do this 
? console.log("positive") 
// Otherwise do this
: console.log("negative or zero");


if (x === 0){
    console.log("hello");
} else if (x < 0) {
    console.log("hi");
} else {
    console.log("goodbye");
}

// Same thing (different way)^^
 x === 0
    ? console.log("hello")
    : x < 0
        ? console.log("hi")
        : console.log("goodbye")


/*
let age = 15;

if (age <= 17){
    console.log("Sorry, you\'re too young to do anything");
} else if ( age <= 20 ){
    console.log("Yay! You can vote!");
} else if (age <= 24){
    console.log("Yay! You can drink!");
} else {
    console.log("Yay! You can rent a car!");
}
*/

// Same thing (different way)^^
let age = 19;
 age <= 17
    ? console.log("Sorry, you\'re too young")
    : age <= 20
        ? console.log("Yay! You can vote")
        : age <= 24
            ? console.log("Yay! You can drink")
            : console.log("Yay! You can rent a car");