// ## Assignment 7 — API timeout using race (Promise.race)

// ### Instructions

// - Create `timeout(ms)` that rejects after `ms` with `"Request timed out"`.
// - Create `fakeAPI` that resolves after 1800 with `"Data received"`.
// - Race them using `Promise.race` with a timeout of 1200.
// - Log the result or timeout error.

function timeout(ms) {
  return new Promise((reject) => {
    setTimeout(() => {
      reject("Request timed out");
    }, ms);
  });
}

function fakeAPI(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("Data Recieved")
        }, 1800)
    })
}


Promise.race([timeout(1200), fakeAPI()])
.then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.log(err);
})