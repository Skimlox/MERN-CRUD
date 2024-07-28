//LOAD ENV VARIABLES
require("dotenv").config();

//express app
const express = require('express');
//connect to DB
const app = express();
const connectMongoDb = require("./database/mongodb");
connectMongoDb();
//routing
app.get('/',(req,res) => {
    res.json({hello : "world"});
})

//server
app.listen(process.env.PORT);