const { error } = require("console");
const express = require("express")
const app = express()
const port = 3000;
 
app.use(express.json())

const users= [
    {username:'alice',age:25,email:"alice@example.com"},
    { username:'bob',age:30,email:"bob@example.com"},
    {username:'charlie',age:28,email:"charlie@example.com"}
]


app.post("/User",(req,res)=>{
    const {username,age,email}= req.body;
    if(!username||!age||!email)
        return res.status(400).json({error:"User parameter cannot be empty"})
    if(!users)
        return res.status(400).json({error:"User not found"})

    res.status(201).json({message:"User found","data":{users}})
})

app.listen(port,()=>{
    console.log(`Server is running on ${port}`)
})