// ## Assignment 6 — Race with rejection (Promise.race)

// ### Instructions

// - Create two promises:
//     - p1 resolves after 2500 with “Data OK”.
//     - p2 rejects after 900 with “Network Error”.
// - Race them.
// - Show that `.catch` triggers if the reject happens first.

let p1 = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve("Data Ok")
    }, 2500)
})

let p2 = new Promise((reject)=>{
    setTimeout(()=>{
        reject("Network Error")
    }, 900)
})

Promise.race([p1,p2])
.then((results)=>{
    console.log(results);
})
.catch((err)=>{
    console.log(err);
})

