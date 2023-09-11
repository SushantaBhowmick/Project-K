const  mongoose  = require("mongoose");

exports.connectDB = ()=>{mongoose.connect(process.env.MONGO_URI)
.then((data)=>{
    console.log(`MongoDB connected with server:${data.connection.host}`);
})

}