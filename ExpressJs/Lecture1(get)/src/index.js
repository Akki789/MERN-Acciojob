import express from "express";

const app = express();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});

// app.get('/', (req, res) => {
//     res.send('<h1>get request is working</h1>')
// })

// app.get("/api/users", (req, res) => {
//   res.send([
//     { id: 1, name: "Akash", age: 22 },
//     { id: 2, name: "Vedant", age: 25 },
//     { id: 3, name: "Saurabh", age: 26 },
//   ]);
// });

// app.get("/", (req, res) => {
//   res.send("<h1>Home page</h1>");
// });

// app.get("/api/users/:id", (req, res) => {
//   console.log(req.params);
//   res.send("<h1>Route parameters </h1>");
// });

let mockUsers = [
  { id: 1, name: "Akash", age: 10, gender: "male" },
  { id: 2, name: "Vedant", age: 20, gender: "male" },
  { id: 3, name: "Saurabh", age: 15, gender: "male" },
  { id: 4, name: "Ankita", age: 20, gender: "female" },
  { id: 5, name: "Pragati", age: 23, gender: "female" },
];


// app.get('/mockUsers/:id', (req, res) => {
//     console.log('mockUsers ', req.params);
//     const userId = parseInt(req.params.id);
//     const user = mockUsers.find(u => u.id === userId);

//     console.log(user.name);
//     res.send(user.name);
// })

app.get('/mockUsers/users/', (req,res) => {
    const gender = req.query.gender;
    console.log(gender);
    const filteredUsers = mockUsers.filter(u => u.gender == gender && u.age >=18);
    const names = filteredUsers.map(u => u.name);
    res.send(names);
    
})


