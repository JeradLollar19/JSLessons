let listTitle = document.getElementById('listTitle');

let listItem = document.querySelectorAll('ul li');
console.log(listItem);

listTitle.style.textAlign = 'center';

let groceryItems = document.getElementsByClassName('groceryItem');

groceryItems[2].style.color = 'red';
groceryItems.item(1).style.color = 'green';

console.log(document.body.childNodes);

let listDiv = document.getElementById('list');
console.log(listDiv.firstElementChild);

listDiv.firstElementChild.style.fontSize = '25px';

document.getElementById('listTitle').addEventListener('mouseover', event => {
    event.target.style.backgroundColor = 'lightBlue';
})

listTitle.addEventListener('mouseleave', event => {
    event.target.style.backgroundColor = 'transparent';
})


let newItem = '';
let inputBox = document.getElementById('listInput');
let groceryList = document.getElementById('groceryList');
let submitButton = document.getElementById('clickMe');
let errorMessage = document.createElement('p');

const generateNewItem = (value) => {
    if (value.length > 0) {
        errorMessage.innerText = '';
        let newListItem = document.createElement('li');
        newListItem.innerText = value;
        groceryList.appendChild(newListItem);
        inputBox.value = '';
    } else {
        errorMessage.innerText = 'Please enter a value';
        errorMessage.style.color = 'red';
        document.getElementById('inputField').appendChild(errorMessage);
    }
}

inputBox.addEventListener('keyup', event => {
    if (event.keyCode === 13) {
        generateNewItem(event.target.value)
    } else {
    newItem = event.target.value;
    }
});

submitButton.addEventListener('click', event => {
    // Procedure is to create a new list item
    // Attach that list item to the ul
    // Clear the input box
    generateNewItem(inputBox.value)
})