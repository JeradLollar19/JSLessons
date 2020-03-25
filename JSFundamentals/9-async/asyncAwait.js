 let myFn = async () => {
     return Promise.reject("success")
};
myFn().catch(err => console.log(err));

// async function foo() {
//     try {
//          let response = await fetch("https://random.dog/woof.json");
//          let json = await response.json();
//         console.log(json);
//     } catch(err) {
//         console.error(err);
//     }
// }
// foo();