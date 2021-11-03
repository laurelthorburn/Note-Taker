//dependencies
const express = require('express'); //using express
const fs = require('fs');
const path = require('path'); //__dirname? -- might not need
var uniqid = require('uniqid'); //creates unique ID - change to const?

const PORT = 3001;
const app = express();

//psuedo code: need to store/retrieve 'fs'

//Have two HTML Routes
// GET /notes returns notes.html file
//GET * returns index.html file

// Create API routes:
// GET /api/notes should read db.json file and return all saved notes as JSON
// POST should receive new note to save on request body, add to db.json file, return new note to client (give each note unique ID using uniqid)

//BONUS: DELETE
// Add delete route to the app
//DELETE /api/notes/:id = query parameter contains ID of note to delete.  Have to read all notes from db.json file and then remove note with given ID property and then rewrite notes to db.json file
app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);