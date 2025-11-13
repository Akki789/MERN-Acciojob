const pizzaDelivery = (name, time, shouldFail) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            shouldFail
                ? reject(`${name} failed ❌`)
                : resolve(`${name} delivered in ${time / 1000}s 🍕`);
        }, time);
    });
};

const dominos = pizzaDelivery("Dominos", 3000, false);
const pizzaHut = pizzaDelivery("Pizza Hut", 2000, false);
const mojo = pizzaDelivery("Mojo", 1000, false);

Promise.race([dominos, pizzaHut, mojo])
.then((result)=>{
    console.log(result);
})
.catch((err)=>{
    console.log(err);
})