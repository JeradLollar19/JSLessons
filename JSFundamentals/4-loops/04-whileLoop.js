let x = true;
let i = 0;

while (true){
    i++;
    if (i === 5){
        break;
    }
    console.log(i);
}

while (i < 10){
    let v = 8;

    while (true){
        v--;
        if (v === 0){
            break;
        }
        console.log(v);
    }
    console.log('TESTING');
    i++;
}


// DO WHILE loop

do {
    // code block here
} while (true)