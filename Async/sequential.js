// Sequential
function fakeAPI(name, delay) {
  return new Promise(function(resolve) {
    setTimeout(function() {
      console.log(name + " completed");
      resolve(name);
    }, delay);
  });
}

fakeAPI("Task 1", 2000)
.then(()=>{
    return fakeAPI("Task 2", 3000);
})
.then(()=>{
    return fakeAPI("Task 3", 1000);
})
.then(()=>{
    console.log("All Task Completed");
})