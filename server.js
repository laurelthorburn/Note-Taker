//dependencies
const express = require('express'); //using express
const fs = require('fs');
const path = require('path'); //__dirname? -- might not need
var uniqid = require('uniqid'); //creates unique ID - change to const?
const db = require('./db/db.json');

const PORT = 3001;
const app = express();

app.use(express.static('public')); //loads root file, links js file and your css file

//psuedo code: need to store/retrieve 'fs'

// GET /notes returns notes.html file
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);

// Create API routes:
// GET /api/notes should read db.json file and return all saved notes as JSON
app.get('/api/notes', (req, res) => res.json(db));


// POST should receive new note to save on request body, add to db.json file, return new note to client (give each note unique ID using uniqid)

app.post('api/reviews', (req, res) => {

    res.json(`${req.method} request received`);
  })


//BONUS: DELETE
// Add delete route to the app
//DELETE /api/notes/:id = query parameter contains ID of note to delete.  Have to read all notes from db.json file and then remove note with given ID property and then rewrite notes to db.json file
app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);

//GET * returns index.html file - I might be procedural, a fallback for your failures
app.get('/*', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);