const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    title:{
        type:String,
        required:[true,"Please enter product title"],
    },
    description:{
        type:String,
        required:[true,"Please enter product descripton"],
        minlength:[20,"description should be more than 20 character"]
    },
    price:{
        type:Number,
        required:[true,"Please enter product title"],
    },
    images:[
        {
            public_id:{
                type: String,
                required:true,
            },
            url:{
                type: String,
                required:true,
            },
        }
    ],
    ratings:{
        type:Number,
        default:0,
    },
    category:{
        type: String,
        required:true,
    },
    stock:{
        type:Number,
        required:[true,"Please enter Product Stock"],
        maxlength:[4,"Stock cannot exceed chareters"],
        default:1,
    },
    numOfReviews:{
        type:Number,
        default:0,
},
reviews:[
    {
        user:{
            type:mongoose.Schema.ObjectId,
            ref:"User",
            required:true,
        },
        name:{
            type: String,
            required:true,  
        },
        rating:{
            type: Number,
            required:true,
        },
        comment:{
            type: String,
            required:true,
        }
    }
],
user:{
    type:mongoose.Schema.ObjectId,
    ref:"User",
    required:true,
},
createdAt:{
    type:Date,
    default:Date.now
}

})

module.exports = mongoose.model("Product",productSchema);