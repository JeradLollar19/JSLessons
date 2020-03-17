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