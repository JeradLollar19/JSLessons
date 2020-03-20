let hi = () => "hi";

let hello = hi();
console.log(hello);


/* Same thing as above (personal preference)

function hi(){
    return "hi";
}
let hello = hi();
console.log(hello);
*/

let capName = (name) => {
    let capitalizeName = "";

    for(let letter in name){
        if (letter == 0){
            capitalizeName += name[letter].toUpperCase();
        } else {
            capitalizeName += name[letter].toLowerCase();
        }
    }
    console.log(capitalizeName);
    return capitalizeName;
}
let myName = capName("jErAD");
console.log(myName);

/* Challenge: 
-Make a tip calculater using a function
-Have it RETURN the value
-Capture that returned value in a VARIABLE
-Print that variable
*/

let getTip = (amount) => {
    amount *= 100;
    amount = Math.round(amount / 5) / 100;
    return amount;
};

let tipForMyCoffee = getTip(4.59);
console.log(tipForMyCoffee);

// Another way to do function above

let tipCalc = bill => (bill * 0.2).toFixed(2)
let totalTip = tipCalc(19.72);
console.log(totalTip);