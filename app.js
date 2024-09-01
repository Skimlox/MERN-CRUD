
//LOAD ENV VARIABLES
require("dotenv").config();

//dependencies
const express = require('express');
const cors = require("cors");
const connectToDb = require("./main-server/config/connectToDb");
const Note = require("./designs/notes");
const notesController = require("./controllers/notescontrol");

//app config
const app = express();
app.use(express.json());
app.use(cors());
connectToDb();



//requests
app.get("/notes", notesController.fetchNotes);
app.get("/notes/:id", notesController.fetchNote);
app.post("/notes", notesController.createNote);
app.put("/notes/:id", notesController.updateNote);
app.delete("/notes/:id", notesController.deleteNote);

//server start
app.listen(process.env.PORT);