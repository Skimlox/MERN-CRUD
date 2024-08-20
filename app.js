
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


//requests
app.get('/',(req,res) => {
    res.json({hello : "world"})
});
app.get('/notes',async (req,res) => {
    const notes = await Note.find();
    res.json({notes : notes});
});
app.post("/notes",async (req,res)=>{
    const title = req.body.title
    const body = req.body.body

    const note = await Note.create({
        title: title,
        body: body,
})
});
//server start
app.listen(process.env.PORT);