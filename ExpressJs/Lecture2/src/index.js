import express from "express";

const app = express();


const PORT = process.env.PORT || 3000;

// app.use(express.json()); //middleware

const loggingMiddleware = (req,res,next) => {
  console.log(`${req.method} - ${req.url}`);
  next();
}

app.use(loggingMiddleware);

// app.get('/', (req,res) => {
//   req.send("hello")
// });

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});

app.get('/', (req, res) => {
    res.send('Hello world')
})

let mockUsers = [
  {id: 1, name: "Akash", age:15, gender:'male'},
  {id: 2, name: "Saurabh", age:29, gender:'male'},
  {id: 3, name: "Vedant", age:21, gender:'male'},
  {id: 4, name: "Kalpna", age:19, gender:'female'},
  {id: 5, name: "Anushka", age:15, gender:'female'}
]

app.get('/', (req,res) =>{
  console.log(req.body);
  res.send(mockUsers)
})



app.post('/', (req,res) =>{
  const {name, age,gender} = req.body;

  const newUser = {
    id : mockUsers.length +1,
    name:name,
    age:age,
    gender:gender
  }

  mockUsers.push(newUser);
  console.log(newUser);
  res.send(newUser);
})

app.put('/api/users/:id', (req,res) => {
 const {body, params} = req;

 const parseId = parseInt(params.id)

  const findUserIndex = mockUsers.findIndex(user => user.id ===parseId);
  if(findUserIndex === -1) return res.status(404)

    //we have to kept the id same

    mockUsers[findUserIndex] = {id: parseId, ...body}
    return res.send(mockUsers).status(200);
})

app.patch('/api/users/:id', (req,res) => {
 const {body, params} = req;

 const parseId = parseInt(params.id)

  const findUserIndex = mockUsers.findIndex(user => user.id ===parseId);
  if(findUserIndex === -1) return res.status(404)

    //we have to kept the id same

    mockUsers[findUserIndex] = {...mockUsers[findUserIndex], ...body}
    return res.send(mockUsers).status(200);
})

app.delete('/api/users/:id', (req,res) => {
 const {body, params} = req;

 const parseId = parseInt(params.id)

  const findUserIndex = mockUsers.findIndex(user => user.id ===parseId);
  if(findUserIndex === -1) return res.status(404)

    //we have to kept the id same

    mockUsers.splice(findUserIndex, 1);
    return res.send(mockUsers).status(200);
})