const express = require('express')

const app = express();
const {adminAuth} = require('./middlewares/autth')

// app.get('/user',(req,res)=>{
//     console.log(req.query)
//     res.send({
//         FirstName: "Ritik", Latname:"singh",
//     })
// })

// app.get('/user/:userId/:Name/:Password',(req,res)=>{
//     console.log(req.params)
//     res.send({
//         FirstName: "Ritik", Latname:"singh",
//     })
// })

// app.use("/test",(req,res)=>{
//     res.send("Hello from our Server")
// });


// app.use("/User",(req,res,next)=>{
//     // res.send('Response 1')

// next();

// },
// (req,res)=>{
//     res.send("Response 2")
// })


// checking admin auth

app.use("/admin",adminAuth)


app.get("/admin/getAllData",(req,res)=>{
     res.send("all Data sent")
    
});



app.listen(7777,()=>{
    console.log("Server is sucessfully Listening on port 7777")
});
