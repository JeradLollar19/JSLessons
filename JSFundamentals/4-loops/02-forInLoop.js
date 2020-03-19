let student = {
    name: 'Peter',
    awesome: true,
    degree: 'Javascript',
    week: 1
}

for ( item in student ){
    console.log('Key =>', item)
    console.log('Value =>', student[item])
}

let catArray = ['saimese', 'tabby', 'feral', 'sphynx', 'lazy'];

for ( cat in catArray ){
    console.log(catArray[cat]);
}

/* A For-In loop allows you to grab
the keys in an object, or the index
in an Array.*/


/* Challenge: Write a for-in loop
that capitalizes the first letter
of a students name and lowercases
any other letter in the name.*/

let studentName = 'dOllPH';
let newName = '';

for ( char in studentName ){
    if (char > 0){
        newName = newName + studentName[char].toLowerCase();
    } else {
        newName = newName + studentName[char].toUpperCase();
    }
}
console.log(newName);