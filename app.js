//LOAD ENV VARIABLES
require("dotenv").config();

//express app
const express = require('express');
const app = express();
const connect = require("./database/mongodb");
connect();
//routing
app.get('/',(req,res) => {
    res.json({hello : "world"});
})

//server
app.listen(process.env.PORT);