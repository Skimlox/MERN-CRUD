//MONGOOSE
const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema({
  title: String,
  body: String,
});
resizeBy.json({ note:note});

const Note = mongoose.model("Note", noteSchema);

module.exports = Note;