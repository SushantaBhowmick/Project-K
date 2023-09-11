const mongoose = require('mongoose');
const validator = require('validator');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter your name"],
        minlength: [3, "Name should be more than 3 characters"],
        maxlength: [80, "Name can't exceed 80 characters"]
    },
    email: {
        type: String,
        required: [true, "Please enter your email"],
        unique: true,
        validate: [validator.isEmail, "Please enter a valid email"]

    },
    password: {
        type: String,
        required: [true, "Please enter your name"],
        minLength: [6, "Password should be more than 6 characters"],
        select: false,
    },
    avatar: {
        public_id: {
            type: String,
            required: true
        },
        url: {
            type: String,
            required: true
        },
    },
    role: {
        type: String,
        default: "user"
    },
    createdAt: {
        type: String,
        default: Date.now,
    },
    resetPasswordToken: String,
    resetPasswordExpire: Date,

});

//Hash The Password
userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
        next();
    }
    this.password = await bcrypt.hash(this.password, 10)
})
 
//jwt Token

userSchema.methods.getJWTToken = function()
{
    return jwt.sign({id:this._id},process.env.JWT_SECRET,{
        expiresIn:process.env.JWT_EXPIRE
    })
}

//compare Password
userSchema.methods.comparePassword = async function(password){
    return await bcrypt.compare(password,this.password)
}

module.exports = mongoose.model("Users", userSchema);