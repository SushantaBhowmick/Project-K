const express = require('express');
const {config} = require('dotenv');
const user = require('./routes/userRoutes');
const { ErrorMiddleware } = require('./middlewares/error');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

config({
    path:"./config/config.env"
})

//middlerwares
app.use(express.json(bodyParser.urlencoded({extended:true})));
app.use(cookieParser());
app.use(
    cors({
      origin: process.env.FRONTEND_URL,
      credentials: true,
      methods: ["GET", "POST", "PUT", "DELETE"],
    })
  );
// app.use(express.bodyParser());


//import all routes
app.use('/api/v1',user);


app.use(ErrorMiddleware)
module.exports = app;
