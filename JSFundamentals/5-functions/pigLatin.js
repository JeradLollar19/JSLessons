/*
* Challenge (Strings):
Pig Latin:
Create a function that takes in strings
In the function, translate a phrase into pig latin and print both the original and pig latin version to the console.
If able to do so, return the value into another variable and print that variable
What is Pig Latin?
    * If the word begins with a consonant, remove the consonant to the first vowel, place it at the end of the word, and add an 'ay' to the end (i.e. Pig Latin => IgPay Atinlay)
    * If the word begins with a vowel, simply add an 'way' at the end of the word
*/

let test = 'And the world turns and is great';

const pigLatin = ( toChange, firstWord ) => {
    console.log(`Previous: ${ toChange }`);
    // Split the word into an array of characters
    let modified = toChange.split('');
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    // Change the string if it is a vowel
    if ( !(vowels.includes(modified[0].toLowerCase())) ) {
        // Take the first consonant, check if there are more until we hit a vowel
        // Throw them at the end of the word (in order)
        // Loop through until we find a vowel
        do {
            // Take the consonant and throw it at end of word
            modified.push(modified.shift().toLowerCase());
        } while ( !(vowels.includes(modified[0].toLowerCase())) )
        // First character to uppercase
        modified[0] = firstWord ? modified[0].toUpperCase() : modified[0];
        // Combines the array of characters into a single string
        modified = modified.join('');
        // Adds 'ay' to the end
        modified += 'ay';
        console.log(modified);
    } else {
        modified = modified.join('') + 'way';
        console.log(modified);
    }
    return modified;
}

const pigSentence = ( toChange ) => {
    let modified = [];
    toChange.split(' ').forEach((word, index) => {
        modified.push(pigLatin(word, index === 0));
    })
    modified = modified.join(' ');
    console.log(modified);
}
pigSentence(test);

// And --> Andway
// Pig --> Igpay
// This --> Isthay
// String --> Ingstray