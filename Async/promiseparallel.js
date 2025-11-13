// parallel
function fakeAPI(name, delay) {
  return new Promise(function(resolve) {
    setTimeout(function() {
      console.log(name + " completed");
      resolve(name);
    }, delay);
  });
}

fakeAPI("Task 1", 2000)
.then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.log(err);
})

// Promise.all([
//   fakeAPI("Task 1", 2000),
//   fakeAPI("Task 2", 3000),
//   fakeAPI("Task 3", 1000)
// ])
// .then(function() {
//   console.log("✅ All done (Parallel)");
// });