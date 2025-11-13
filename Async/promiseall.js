// function orderpizza(name, time){
//     return new Promise((resolve,reject) =>{
//         resolve(`${name} arrived`);
//     }, time)
// }

// let p1 = orderpizza('Dominos', 2000);
// let p2= orderpizza('Pizza Hut', 2000);
// let p3 = orderpizza('Mojo', 2000);

// Promise.all([p1,p2,p3])
// .then((results)=>{
//     console.log(results);
//     console.log('All pizza Arrived');
// })
// .catch((err)=>{
//     console.log(err);
// })


const p1 = Promise.resolve("Success 1")
const p2 = Promise.reject("Failed 2")
const p3 = Promise.resolve("Success 1")
const p4 = Promise.reject("failed 4")

Promise.all([p1,p2,p3,p4])
.then((results)=>{
    console.log(results);
})
.catch((err)=>{
    console.log(err);
})