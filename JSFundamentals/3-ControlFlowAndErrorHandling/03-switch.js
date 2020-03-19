let friend = "Carolyn";

switch(friend){
    case "Tom":
        console.log("Hey Tom, you wanna go rock climbing?");
        break;
    case "Kenn":
        console.log("Hey Kenn, wanna play Catan?");
        break;
    case "Carolyn":
        console.log("Hey Carolyn, when are we playing DnD?")
        break;
    default:
        console.log(`I'm sorry, ${ friend }, but do I know you?`);
}

/* If you don't include a break, the switch statement
will fire all cases after the first met case until a break
is hit, even if they are not true. 
*/

// Challenge
let dessert = "Pie";

switch(dessert){
    case "Pie":
        console.log("Pie, pie, me oh my!");
        break;
    case "Cake":
        console.log("Cake is great!");
        break;
    case "Ice cream":
        console.log("I scream for ice cream!");
        break;
    default:
        console.log(`Sorry, but ${ dessert }, is not on the menu!`);
}

// Multiple conditions
let yep = -8;

switch ( true ){
    case (yep < 0 && yep > -10):
        console.log("Worked");
        break;
    case (yep > 0):
        console.log("Worked");
        break;
    default:
        console.log("Did\'t work");
}