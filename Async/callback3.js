// callbacks and callback hell
// --------------------------------------

// understanding callback
// a function passed as an argument to another function
// called(executed) later

// function as argument
function greet(name) {
    console.log("Hello " + name);
}

function processUserInput(callback) {
    let name = "Jay";
    callback(name);
}

processUserInput(greet);


// callback execution flow
// function first() {
//     console.log("Step 1: Preparing data...");
// }

// function second() {
//     console.log("Step 2: Processing complete!");
// }

// function doTask(task1, task2) {
//     task1();
//     task2();
// }

// doTask(first, second);


// async callbacks with setTimeout
// console.log("start");
// setTimeout(() => {
//     console.log("Inside setTimeout");
// }, 2000);
// console.log("End");


// Callback Examples
// button click
// document.getElementById("btn").addEventListener("click", function() {
//     console.log("Button Clicked");
// })

// data fetch simulation
// function fetchData(callback) {
//     console.log("Fetching data...");
//     setTimeout(() => {
//         let data = {
//             id: 1,
//             name: "Jay"
//         }
//         callback(data);
//     }, 2000);
// }

// function displayData(data) {
//     console.log("Data received:", data);
// }

// fetchData(displayData);





// callback patterns
// error-first callbacks
// a pattern where first argument of a callback is reserved for error and second for result.

// syntax
// function callback(error, data) {
//     if(error) {
//         // handle error
//     } else {
//         // handle success
//     }
// }

// falsy values
// null
// undefined
// ""
// 0
// NaN
// false

// function divide(a, b, callback) {
//     if(b === 0) {
//         callback("Cannot divide by zero", null);
//     } else {
//         callback(null, a/b);
//     }
// }

// divide(10, 0, function(error, result) {
//     if(error) {
//         console.log("Error:", error);
//     } else {
//         console.log("Result:", result);
//     }
// })


// success and error handlers (separate functions)
// two callbalcs
    // - one for success
    // - one for failure

// function fetchUser(id, onSuccess, onError) {
//     setTimeout(() => {
//         if(id === 0) {
//             onError("user not found");
//         } else {
//             onSuccess({id: id, name: "Jay"})
//         }
//     }, 1000);
// }

// fetchUser(
//     0,
//     function(user) {
//         console.log("User fetched:", user);
//     },
//     function(err) {
//         console.log("Error:", err);
//     }
// );


// sequential operations (callback chaining)
// function step1(callback) {
//     console.log("Step 1 done");
//     setTimeout(callback, 1000);
// }

// function step2(callback) {
//     console.log("Step 2 done");
//     setTimeout(callback, 1000);
// }

// function step3(callback) {
//     console.log("Step 3 done");
//     setTimeout(callback, 1000);
// }

// function allDone() {
//     console.log("All steps completed!");
// }

// step1(() => step2(() => step3(allDone)));

// step1(() => {
//     step2(() => {
//         step3(allDone);
//     });
// });



// callback hell problem
// happens when you have nested callbacks, each depending on the previous one's result

// getUser(function(user) {
//     getPosts(user.id, function(posts) {
//         getComments(posts[0].id, function(comments) {
//             saveData(comments, function(result) {
//                 console.log("All tasks done!");
//             })
//         })
//     })
// })

// getUser(
//     getPosts(
//         getComments(
//             saveData(
                
//             )
//         )
//     )
// )


// why it happens
// 1. you need to perform multiple async operations sequentlly
// 2. each operation depend on the previous one's result
// 3. you handle all of this using nested callbacks



// managing callback hell
// named function approach
// instead of using anonuympus functions inside each callback, you can define named functoins and pass them as callbacks.

// example - before
// getUser(function(user) {
//     getPosts(user.id, function(posts) {
//         getComments(posts[0].id, function(comments) {
//             saveData(comments, function(result) {
//                 console.log("All tasks done!");
//             })
//         })
//     })
// })

// example - after
// function onCommentsReceived(comments) {
//     console.log(comments);
// }

// function onPostReceived(posts) {
//     getComments(posts[0].id, onCommentsReceived);
// }

// function onUserReceived(user) {
//     getPosts(user.id, onPostReceived)
// }

// getUser(onUserReceived);


// modular code structure

// early returns

// helper functions