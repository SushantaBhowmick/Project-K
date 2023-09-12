const catchAsyncError = require('../middlewares/catchAsyncError');
const User = require('../models/userModel');
const ErrorHandler = require('../utils/errHandler');
const sendToken = require('../utils/sendToken');
const cloudinary = require('cloudinary');

exports.register = catchAsyncError(async (req, res, next) => {
    const { name, email, password } = req.body;

    //cloudinary add here
    const myCloud = await cloudinary.v2.uploader.upload(req.body.avatar)

    if (!name || !email || !password)
        return next(new ErrorHandler("Please enter all fields", 400));

    let user = await User.findOne({ email });

    if (user)
        return next(new ErrorHandler("User Already Exits", 400));

    user = await User.create({
        name,
        email, 
        password, 
        avatar: {
            public_id: myCloud.public_id,
            url: myCloud.secure_url,
        }
    })

    sendToken(res, user, "User Register Successfully", 201)

})

exports.login = catchAsyncError(async (req, res, next) => {
    const { email, password } = req.body;

    if (!email || !password)
        return next(new ErrorHandler("Please enter all fields", 400));

    let user = await User.findOne({ email }).select("+password");

    if (!user)
        return next(new ErrorHandler("Incorrect Email or Password", 401));

    const isMatch = await user.comparePassword(password);
    if (!isMatch)
        return next(new ErrorHandler("Incorrect Email or Password", 401));


    sendToken(res, user, `Welcome back ${user.name}`, 200)

})

exports.logout = catchAsyncError(async (req, res, next) => {

    res.cookie("token", null, {
        expires: new Date(Date.now()),
        httpOnly: false,
        secure: true,
        sameSite: "None",
        withCredentials: true,
    })
    res.status(200).json({
        success:true,
        message:"Logged Out"
    })
})