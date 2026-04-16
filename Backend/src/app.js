const express = require('express')

const app = express();

app.use("/test",(req,res)=>{
    res.send("Hello from our Server")
});

app.listen(7777,()=>{
    console.log("Server is sucessfully Listening on port 7777")
});
