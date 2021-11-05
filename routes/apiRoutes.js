//dependencies
const router = require('express').Router(); //using express
const fs = require('fs');
const path = require('path'); //__dirname? -- might not need
var uniqid = require('uniqid'); //creates unique ID - change to const?
const db = require('../db/db.json');
const { readFromFile, writeToFile, readAndAppend } = require('./helpers'); //destructured

// Create API routes:
// GET /api/notes should read db.json file and return all saved notes as JSON
router.get('/api/notes', (req, res) => res.json(db));

// POST should receive new note to save on request body, add to db.json file, return new note to client (give each note unique ID using uniqid)
router.post('/api/notes', (req, res) => {
    // Destructuring assignment for the items in req.body
    const { title, text } = req.body;

        // Variable for the object we will save
        const newNote = {
            title,
            text,
            id: uniqid(),
        };
      // }

    console.log(req.body);
    res.json(newNote);  // <==== req.body will be a parsed JSON object

  })

  //psuedo code: need to store/retrieve 'fs'
  //

//BONUS: DELETE
// Add delete route to the app
//DELETE /api/notes/:id = query parameter contains ID of note to delete.  Have to read all notes from db.json file and then remove note with given ID property and then rewrite notes to db.json file

module.exports = router;