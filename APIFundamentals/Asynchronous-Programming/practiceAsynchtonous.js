<!-- Callback Function -->
function callbackFunction(){
    const data = {
        name: 'Ralf Machio', 
        age: 66, 
        occupation: 'kickboxing'
    }
    return data;
}

function showGreeting(dataFromFunction){
    return "hello " + dataFromFunction.name + ", I hear you're the greatest?!"
}

console.log(
    showGreeting(callbackFunction())
)


function callbackFunction(){
    for(let i = 0; i < 100; i++){
        console.log(i)
    }

     const data = {
        name: 'Ralf Machio', 
        age: 66, 
        occupation: 'kickboxing'
    }
    return data;
}

function showData(dataFromFunction){
    return "hello " + dataFromFunction.name
}

console.log(
    showData(callbackFunction())
)


<!-- Promises -->

<!-- Boolean Declaration -->
var amIGood = false;

<!-- Promises -->
var iCanHasGift = new Promise(
    function (resolve, reject) {
        if (amIGood) {
            var gift = {
                brand: 'HasMattelbro',
                item: 'Turbo-Man action figure'
            };
            resolve(gift);
        } else {
            var naughty = "You've made Santa's naughty list; enjoy your coal!";
            reject(naughty);
        }
    }
);

<!-- Consuming Promises -->

<!-- Promise call  -->
var checkTwice = function () {
    iCanHasGift
        .then(function (fulfilled) {
            console.log(fulfilled);
        })
        .catch(function (error) {
            console.log(error);
        });
};

checkTwice();


var playDate = function (gift) {
    return new Promise(
        function (resolve, reject) {
            var message = "Salutations fellow child I enjoy interacting with! I notice you received a posable plastic Batman figurine during the Yultide season. What do you think of my new " + gift.brand + ' ' + gift.item + '?';

            resolve(message); 
        }
    );
};

var checkTwice = function () {
    console.log('before Christmas');
    iCanHasGift
        .then(playDate)
        .then(function (fulfilled) {
            console.log(fulfilled);
        })
        .catch(function (error) {
            console.log(error)
        });
    console.log('after opening gifts');
}

checkTwice()


<!-- Chaining Promises -->
var checkTwice = function () {
    iCanHasGift
    .then(playDate)
    .then(function (fulfilled) {
        console.log(fulfilled);

    })
    .catch(function (error) {
        console.log(error)
    });
};

checkTwice();