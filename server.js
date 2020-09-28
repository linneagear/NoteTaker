// Dependencies
// =============================================================
const express = require("express");
const path = require("path");
const fs = require("fs");
const store = require("./db/store");

// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing and static
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// ROUTES
// =============================================================

// Changes to notes page when Get Started button is clicked
app.get("/notes", function(req, res) {
  res.sendFile(path.join(__dirname, 'public', "notes.html"));
});

// default is homepage, this needs to be last in the order
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, 'public', "index.html"));
});

app.get("/api/notes", function(req, res) {
  store
    .getNotes()
    .then((notes) => res.json(notes))
    .catch((err) => res.status(500).json(err));
});


// Should receive a new note to save on the request body, 
// add it to the `db.json` file, and then return the new note to the client.
app.post("/api/notes", function(req, res) {

    // Parse the db.json to get an object
    let notesArray = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));

    // body of the request = the new note
    let newNote = req.body;

    // give the note an id by doing a for loop
    for (let i = 0; i < notesArray.length; i++) {
      newNote.id = "" + [i]
    }
  
    // push it to the empty object
    notesArray.push(newNote);

    // write the new file to db.json, and stringify it back to a string to go to the server
    fs.writeFileSync("./db/db.json", JSON.stringify(notesArray));
    console.log("Note saved.");

    res.json(notesArray);

  });

// DELETE note by id
app.delete("/api/notes/:id", function(req, res) {
  store
    .removeNote(req.params.id)
    .then(() => res.json({ ok: true }))
    .catch((err) => res.status(500).json(err));
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log(`App listening on PORT ${PORT}`);
});
  