function hi(name, age){
    console.log(`Hi ${name}, you are ${age}`);
}
hi("Jerad", 22);

/* Challenge: -Write a function that takes two parms
- One parm is for the first name
- The other is for last name
- Have them come together in a variable inside function
- console.log "Hello, my name is <your name>"
- Call (or invoke) your function */

function sayFullName(first, last){
    let fullName = first + " " + last;
    console.log(`Hello, my name is ${fullName}`);
}
sayFullName("Jerad", "Lollar");