const mongoose = require('moongoose')

const Connect =()=>{
 mongoose.Connect('mongodb://localhost:27017/')
} 
Connect
module.exports=Connect