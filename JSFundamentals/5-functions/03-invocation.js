function greeting(){
    console.log('Hello, friend');
}

let hal = function(){
    console.log('I\'m sorry dave, but I cannot do that');
}

greeting();

hal();

/* Challenge: Given the array, creat a function that
lists out the values individually */

let arr = ["this", "is", "really", "cool"];

function myFunction(){
    for (items in arr){
        console.log(arr[items]);
    }
}
myFunction();