
//LOAD ENV VARIABLES
require("dotenv").config();

//express app
const express = require('express');
//connect to DN


const connectToDb = require("./config/connectToDb");
const app = express();
connectToDb();
//routing
app.get('/',(req,res) => {
    res.json({hello : "world"})
})

//server
app.listen(process.env.PORT)