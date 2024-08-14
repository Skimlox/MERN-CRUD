
//LOAD ENV VARIABLES
require("dotenv").config();

//express app
const express = require('express');
//connect to DN


const connectToDb = require("./config/connectToDb");
const app = express();
app.use(express.json());
connectToDb();
//routing
app.get('/',(req,res) => {
    res.json({hello : "world"})
});
app.post("/notes",(req,res)+>{

});
//server
app.listen(process.env.PORT);