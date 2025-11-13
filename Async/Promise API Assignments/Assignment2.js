// ## Assignment 2 — Verify result order

// ### Instructions

// - Reuse `task(name, ms)`.
// - Run three tasks with different times: T1 (200), T2 (1200), T3 (600).
// - When `Promise.all` resolves, print the results array.
// - Also print: `First result is: <results[0]>`.
    
//     Confirm that the first array element corresponds to T1, even though it may not finish last by time.

function task(name, ms){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(`${name} done in ${ms} mili seconds`)
        },ms)
    })
}


let n1 = task("T1", 200);
let n2 = task("T2", 1200);
let n3 = task("T3", 600);


Promise.all([n1,n2,n3])
.then((results)=>{
    console.log(results);
    console.log(`First result is : ${results[0]}`);
    console.log("✅ All Task Completed");
})
.catch((err)=>{
    console.log(err);
})