const userData = fetch("https://jsonplaceholder.typicode.com/users/1");
const postData = fetch("https://jsonplaceholder.typicode.com/posts/1");
const commentData = fetch("https://jsonplaceholder.typicode.com/comments/1");

Promise.all([userData, postData, commentData])
.then((results) =>{
    return Promise.all(results.map((res)=>{
        return res.json();
    }))
})
.then((data)=>{
    console.log(data);
})
.catch((err)=>{
    console.log(err);
})