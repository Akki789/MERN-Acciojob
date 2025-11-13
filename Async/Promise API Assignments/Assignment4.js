// ## Assignment 4 — One rejection cancels the group

// ### Instructions

// - Create `okAfter(ms)` that resolves with `OK after <ms>`.
// - Create `failAfter(ms)` that rejects with `Fail after <ms>`.
// - Call `Promise.all` with `[okAfter(500), failAfter(800), okAfter(400)]`.
// - Observe which handler runs. Log the error.

function okAfter(ms){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(`Ok after ${ms} milliseconds`)
        },ms)
    })
}

function failAfter(ms){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            reject(`Fail after ${ms} milliseconds`)
        },ms)
    })
}

Promise.all([okAfter(500), failAfter(800), okAfter(400)])
.then((result)=>{
    console.log(result);
})
.catch((err)=>{
    console.log(err);
})