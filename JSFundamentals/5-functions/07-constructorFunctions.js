/* Person Model
-Name
-Height
-Age
-canVote
*/

let person1 = {
    name: 'JoJo',
    height: 64,
    age: 32,
    canVote: true
}



function Person(name, height, age){
    this.name = name;
    this.height = height;
    this.age = age;
    this.canVote = age >= 18;

    this.greeting = () => console.log(`Hello, my name is ${name}`);
    this.birthday = () => this.age = age + 1;
}

let person2 = new Person('Bruce', 68, 55);
let person3 = new Person('Dick', 64, 24);

person2.greeting();

// console.log(person2, person3);
// console.log(person3.name);