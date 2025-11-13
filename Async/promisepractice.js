// example 2 - callback hell to promise chain
setTimeout(() => {
  console.log("1️⃣ Step 1 done");
  setTimeout(() => {
    console.log("2️⃣ Step 2 done");
    setTimeout(() => {
      console.log("3️⃣ Step 3 done");
    }, 1000);
  }, 1000);
}, 1000);

function datafetch(step, time){
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            console.log(`${step}`);
        }, 1000)
    })
}