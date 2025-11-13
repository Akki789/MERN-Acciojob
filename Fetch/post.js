let newPost = {
    title : "Fetch API is awesome",
    body : "This post was sent using a POST request",
    userId: 1
};

fetch("https://jsonplaceholder.typicode.com/users", {
    method:"POST",
    headers:{
        "Content-Type" : "application/json"
    },
    body: JSON.stringify(newPost)
})
.then((res) =>{
    if(!res.ok){
        throw new Error("Response was not ok")
    }
    return res.json();
})
.then((data)=>{
    console.log(data);
})
.catch((err)=>{
    console.log(err);
})