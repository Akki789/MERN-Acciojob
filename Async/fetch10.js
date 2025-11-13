async function getInfo() {
  // TODO: fetch -> await res.json()
  fetch("https://jsonplaceholder.typicode.com/users")
.then((res) => {
    return res.json();
})
  // TODO: print count and first email

.then((data)=>{
    let email = data.map(user => user.email);
    console.log(email[0]);
    console.log(email.length);
})
}
getInfo();