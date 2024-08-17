
//LOAD ENV VARIABLES
require("dotenv").config();

//express app
const express = require('express');
//connect to DB


const connectToDb = require("./config/connectToDb");
const Note = require("./designs/notes")
const app = express();
app.use(express.json());
connectToDb();
//routing
app.get('/',(req,res) => {
    res.json({hello : "world"})
});
app.post("/notes",async (req,res)=>{
    const title = req.body.title
    const body = req.body.body

    const note = await Note.create({
        title: title,
        body: body,
})
});
//server
app.listen(process.env.PORT);