const express = require("express")
const app = express()
const port = 3000;
 
app.use(express.json())

const userDetails= [
    {username:'alice',age:25,email:"alice@example.com"},
    { username:'bob',age:30,email:"bob@example.com"},
    {username:'charlie',age:28,email:"charlie@example.com"}
]
app.get("/Users",async (req,res)=>{
    const {username,age,email}= req.body;
    if(!username||!age||!email)
        return res.status(400).json({error:"User parameter cannot be empty"})
    if(!userDetails)
        return res.status(400).json({error:"User not found"})


   const User = await userDetails.find()
   res.status(201).json({message:"User found",User,"data":{userDetails}})
})


app.listen(port,()=>{
    console.log(`Server is running on ${port}`)
})