// Dependencies
// =============================================================
const express = require("express");
const path = require("path");
const fs = require("fs");

// Sets up the Express App
// =============================================================
const app = express();
const PORT = 3000;

// Sets up the Express app to handle data parsing and static
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// get empty notes array. You will push notes to this and then send to the db
let notesArray = [];


// API Routes
// =============================================================


// Should receive a new note to save on the request body, 
// add it to the `db.json` file, and then return the new note to the client.
app.post("/api/notes", function(req, res) {
    // const savedNotes = JSON.parse("/db/db.json")
    const newNote = req.body;
   
    console.log(newNote);
    let uniqueID = uniqueID;

    newNote.id = uniqueID;
  
    console.log(uniqueID);

    // push it to the empty object
    activeNote.push(newNote);

    res.json(newNote);

  });

app.delete("/api/notes/:id", function(req, res) {
 
  });


// Routes
// =============================================================

// GET notes page
app.get("/notes", function(req, res) {
  res.sendFile(path.join(__dirname, "notes.html"));
});

// read the `db.json` file and return all saved notes as JSON.
app.get("/api/notes", function(req, res) {
  res.sendFile(path.join(__dirname, "/db/db.json"));
});


// default is homepage, this needs to be last in the order
app.get("*", function(req, res) {
res.sendFile(path.join(__dirname, "index.html"));
});


// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log(`App listening on PORT ${PORT}`);
  });
  