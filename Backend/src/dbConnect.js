const mongoose = require('mongoose')

const Connect =async()=>{
 await mongoose.connect('mongodb://localhost:27017/DevTinder')
} 

module.exports=Connect