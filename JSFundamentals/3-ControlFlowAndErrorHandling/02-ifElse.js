let weather = 50;

if (weather === 50){
    console.log("no jacket needed!");
} else {
    console.log("wear a jacket!");
};


// Challenge
let myName = "Jerad";

if (myName === "Jerad"){
    console.log(myName);
} else {
    console.log("Hello, is your name Jerad?");    
};


// Challenge2
let name = "zAchARy";

if (name [0] === name[0].toUpperCase()){
    let fixedString = name[0] + name.slice(1).toLowerCase();
    console.log(fixedString);
} else {
    let firstLetter = name[0].toUpperCase()
    let restOfName = name.slice(1).toLowerCase()
    let fullName = firstLetter + restOfName
    console.log(fullName);
};

// Challenge3
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
