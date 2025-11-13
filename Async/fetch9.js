// TODO: fetch -> res.json() -> get names using map()
fetch("https://jsonplaceholder.typicode.com/users")
.then((res) => {
    return res.json();
})
.then((data) => {
    let names = data.map(user =>user.name);
    console.log(names);
})

// TODO: print names or handle error using .catch
.catch((err) => {
    
    console.log(err);
})