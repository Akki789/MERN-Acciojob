 fetch("https://api.quotable.io/random")
        .then((res)=>{
            return res.json();
        })
        .then((data) =>{
            console.log(data);
        })
        .catch((err) =>{
            console.log(err);
        })