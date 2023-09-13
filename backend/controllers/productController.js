const catchAsyncError = require("../middlewares/catchAsyncError");
const Product = require('../models/productModel');
const ErrorHandler = require("../utils/errHandler");


exports.createProduct = catchAsyncError(async(req,res,next)=>{

    let product = await Product.create(req.body) ;

    res.status(201).json({
        success:true,
        message:"Product Created Successfully!",
        product,
    })
})


//Get All Products
exports.getAllProducts = catchAsyncError(async(req,res,next)=>{

    let products = await Product.find() ;

    res.status(200).json({
        success:true,
        products,
    })
})

//get Product details
exports.getProductDetails = catchAsyncError(async(req,res,next)=>{

    let product = await Product.findById(req.params.id) ;

    if(!product) return next(new ErrorHandler('Product Not Found ',404))

    res.status(200).json({
        success:true,
        product
    })
})

//Update Products
exports.updateProduct = catchAsyncError(async(req,res,next)=>{

    let product = await Product.findById(req.params.id) ;

    if(!product) return next(new ErrorHandler('Product Not Found ',404))

    product = await Product.findByIdAndUpdate(req.params.id,req.body,{
        new:true,
        runValidators:true,
        useFindAndModify:false,
    })

    res.status(200).json({
        success:true,
        product,
    })
})

//Update Products
exports.deleteProduct = catchAsyncError(async(req,res,next)=>{

    let product = await Product.findById(req.params.id) ;

    if(!product) return next(new ErrorHandler('Product Not Found ',404))

   product.deleteOne();
//    await product.save()

    res.status(200).json({
        success:true,
        message:"Product Deleted Successfully!",
    })
})