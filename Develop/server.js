// Dependencies
// =============================================================
const express = require("express");
const path = require("path");
const fs = require("fs");

// Sets up the Express App
// =============================================================
const app = express();
const PORT = 3000;
const mainDir = path.join(__dirname, "/public");

// Sets up the Express app to handle data parsing and static
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// ROUTES
// =============================================================

// Changes to notes page when Get Started button is clicked
app.get("/notes", function(req, res) {
  res.sendFile(path.join(mainDir, "notes.html"));
});

app.get("/api/notes", function(req, res) {
  res.sendFile(path.join(__dirname, "/db/db.json"));
});


// default is homepage, this needs to be last in the order
app.get("*", function(req, res) {
  res.sendFile(path.join(mainDir, "index.html"));
});

// displays all notes
// app.get("/api/notes", function(req, res) {

 
// })


// Should receive a new note to save on the request body, 
// add it to the `db.json` file, and then return the new note to the client.
// app.post("/api/notes", function(req, res) {
 
//     let notesArray = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));

//     let newNote = req.body;
//     console.log(newNote);
//     // set new notes ID
//     let uniqueID = uniqueID;

//     // give the new note an ID
//     newNote.id = uniqueID;
//     console.log(uniqueID);

//     // push it to the empty object
//     notesArray.push(newNote);

//     fs.writeFileSync("./db/db.json", JSON.stringify(notesArray));
//     console.log("Note saved to db.json. Content: ", newNote);

//     res.json(notesArray);

//   });

// app.delete("/api/notes/:id", function(req, res) {
//   let notesArray = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
//   let noteID = req.params.id;
//   let newID = 0;
//   console.log(`Deleting note with ID ${noteID}`);
//   notresArray = notesArray.filter(currentNote => {
//     return currentNote.id != noteID;
//   })

//     for (currentNote of notesArray) {
//       currentNote.id = newID.toString();
//       newID++;
//     }

//     fs.writeFileSync("./db/db.json", JSON.stringify(notesArray));
//     res.json(savedNotes);

//   });


// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log(`App listening on PORT ${PORT}`);
  });
  