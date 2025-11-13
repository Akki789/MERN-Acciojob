// ## Assignment 8 — Pizza arrivals report (Promise.allSettled)

// ### Instructions

// - Use `orderPizza(name, time, shouldFail)` that resolves `"<name> arrived 🍕"` if `shouldFail` is false, else rejects `"<name> failed ❌"`.
// - Create three orders:
//     - Dominos (1400, false), Pizza Hut (900, true), Mojo (600, false).
// - Use `Promise.allSettled` and build two arrays:
//     - `arrived` with fulfilled values,
//     - `failed` with reasons.
// - Log both arrays.

function orderPizza(name, time, shouldFail){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            // resolve(``)
            if(shouldFail === false){
                resolve(`${name} arrived`)
            }else{
                reject(`${name} failed`)
            }
        }, time)
    })
}

let p1 = orderPizza("Dominos", 1400, false)
let p2 = orderPizza("Pizza Hut", 900, true)
let p3 = orderPizza("Mojo", 600, false)

Promise.allSettled([p1,p2,p3])
.then((results)=>{
    // console.log(res);
    let arrived = results.filter((res)=>{
        return res.status == "fulfilled"
    })
    .map((res)=>{
        return res.value;
    })


    let failed = results.filter((res)=>{
        return res.status == "rejected"
    })
    .map((res)=>{
        return res.reason;
    })

    console.log(arrived);
    console.log(failed);

})
.catch((err)=>{
    console.log(err);
})