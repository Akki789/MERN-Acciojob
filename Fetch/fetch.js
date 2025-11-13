// fetch

// to make http request

//Applicable for JSON placeholder

// GET :- Returns real fake data(postMessage, useSyncExternalStore, comments)
// POST :- Accepts your data and Returns a fake Response
// PUT:- 

fetch("https://jsonplaceholder.typicode.com/users")
.then((res)=>{
    return res.json();
})
.then((data) =>{
    console.log(data);
})
.catch((err) =>{
    console.log(err);
})