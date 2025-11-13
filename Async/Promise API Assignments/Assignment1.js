// ## Assignment 1 — Run three tasks in parallel

// ### Instructions

// - Create a function `task(name, ms)` that returns a Promise resolving with the string:
    
//     `"<name> done in <ms> ms"` after `ms` milliseconds.
    
// - Start three tasks in parallel: A (1200), B (800), C (1500).
// - Use `Promise.all` to wait for all to finish.
// - Log the array of results, then log: `All tasks finished`.

function task(name, ms){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(`${name} done in ${ms} mili seconds`)
        }, ms)
    })
}


let n1 = task("A", 1200);
let n2 = task("B", 800);
let n3 = task("C", 1500);


Promise.all([n1,n2,n3])
.then((results)=>{
    console.log(results);
    console.log("✅ All Task Completed");
})
.catch((err)=>{
    console.log(err);
})