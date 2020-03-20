let myList = ['thing1', 'thing2', 'thing3', [1, {key1: 'abc'}, 4]];

myList[3][1].key1;

// Adding to the end
let colors = [];
console.log(colors);
colors.push('Red')
console.log(colors);
colors.push('Purple')
console.log(colors);

// .pop removes (opposite of .push)
// colors.pop()
// console.log(colors);

// Removing from the end and puts on bottom
let removed = colors.pop()
console.log(colors);
console.log(removed);

let orders = ['Mary', 'Tim', 'Greg', 'Dolph', 'Ashley'];

// First number is position 
orders.splice(1, 1, 'JoJo');
// Second number is how many it removes
orders.splice(3, 0, 'BoBo');
console.log(orders);

// Opposite of pop (removes beginning)
let shifted = orders.shift();
console.log(orders);
console.log(shifted);

// Removes beginning and puts on top
orders.unshift();
console.log(orders);


let foods = ['Pecan Pie', 'Shrimp', 'Dilla', 'HotDog', 'Pizza'];

for (let i = 0; i < foods.length; i++){
    console.log(foods[i]);
}


for (i in foods){
    console.log(foods[1]);
}


for (food of foods){
    console.log(food);
}


foods.forEach(food => console.log(food));

// Shows the foods as is in the array
foods.forEach(food => 5);
console.log(foods);

console.log(typeof foods);
console.log(foods instanceof Array);

/* Challenge: Creat a function that takes an Array
as a parameter. The flip the values within the array
using a method only, print the values of the
newly arranged array */

let gaming = ['PlayStation 4', 'Xbox One', 'Nintendo Switch', 'PC'];

let reverseArray = (toReverse) => {
    if (toReverse instanceof Array) {
        toReverse.reverse();
    }
}
reverseArray(gaming);

console.log('Before:');
gaming.forEach(input => console.log(input))

if (gaming instanceof Array){
    gaming = gaming.reverse();
}

console.log('After:');
gaming.forEach(input => console.log(input))