// Dependencies
// =============================================================
const express = require("express");
const path = require("path");
const fs = require("fs");


// Sets up the Express App
// =============================================================
const app = express();
const PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// activeNote is used to keep track of the note in the textarea
let activeNote = {};


// HTML Routes
// =============================================================

// First GET the files
// GET notes page
app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "notes.html"));
  });

// default is homepage
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
 });


// API Routes
// =============================================================

// read the `db.json` file and return all saved notes as JSON.
app.get("/api/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "/db/db.json"));
  });

app.get("/api/notes/:id", function(req, res) {
    
  });



app.post("/api/notes", function(req, res) {
    const savedNotes = JSON.parse()
    const newNote = req.body;
    let uniqueID = uniqueID;

    newNote.id = uniqueID;

    console.log(newNote);
    console.log(uniqueID);

    activeNote.push(newNote);

    res.json(newNote);

  });


// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log(`App listening on PORT ${PORT}`);
  });
  