function getUser(id) {
  // TODO: Return a Promise with setTimeout(700ms)
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
         let id = "1";
            if(id) {
                resolve(id);
            } else {
                reject(new Error("Error fetching the data"));
            }
    }, 700);
  })
}

getUser(1)
  .then(u => console.log("OK:", u))
  .catch(e => console.log("ERR:", e.message));

getUser(0)
  .then(u => console.log("OK:", u))
  .catch(e => console.log("ERR:", e.message));