// ## Assignment 3 — Map values to async work

// ### Instructions

// - Create `convert(n, ms)` that resolves to `n * 2` after `ms` milliseconds.
// - Given `nums = [3, 5, 9, 10]`, map each to a `convert` promise with `300` milliseconds delay.
// - Use `Promise.all` to get all converted values.
// - Log the resulting array.

function convert(n, ms){
    return new Promise((resolve) =>{
        setTimeout(()=>{
            resolve(`${n*2} after ${ms} milliseconds`)
        }, ms)
    })
}

let nums = [3, 5, 9, 10];
let tasks = nums.map((task)=>{
    return convert(task, 300)
})

Promise.all(tasks)
.then((result)=>{
    console.log("Double Value", result);
})
.catch((err)=>{
    console.log(err);
})