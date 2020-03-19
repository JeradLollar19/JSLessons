let fb = 50;
 if (fb % 3 && 5){
	console.log("Fizz Buzz");
} else if (fb % 5 == 0){
	console.log("Buzz");
} else if (fb % 3 == 0){
	console.log("Fizz");
} else {
	console.log("Number is not divisible");
}



switch (true){
    case (fb % 15 == 0):
		console.log("Fizz Buzz");
		break;
    case (fb % 5 == 0):
	    console.log("Buzz");
	    break;
    case (fb % 3 == 0):
	    console.log("Fizz");
	    break;
    default:
	    console.log("Number is not divisible");
}


fb % 15 == 0
    ? console.log("Fizz Buzz")
    : fb % 5 == 0
        ? console.log("Buzz")
        : fb % 3 == 0
	        ? console.log("Fizz")
	        : console.log("Number is not divisible");
