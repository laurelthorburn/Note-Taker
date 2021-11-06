//dependencies
const router = require('express').Router(); //using express
const fs = require('fs');
const path = require('path'); //__dirname? -- might not need
var uniqid = require('uniqid'); //creates unique ID - change to const?
const db = require('../db/db.json');
const { readFromFile, writeToFile, readAndAppend, readAndDelete } = require('./helpers'); //destructured

// Create API routes:
// GET /api/notes should read db.json file and return all saved notes as JSON
// GET Route for retrieving diagnostic information
router.get('/api/notes', (req, res) => {
  readFromFile('./db/db.json').then((data) =>
    res.json(JSON.parse(data))
  )
  .catch((err) => console.log(err))
});


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

      //psuedo code: need to store/retrieve 'fs'
       readAndAppend(newNote, './db/db.json');

      //  console.log(req.body);
       res.json(newNote);  // <==== req.body will be a parsed JSON object
   
  })

// Bonus Delete
router.delete("/api/notes/:id", (req, res) => {
  const { id } = req.params;
  let notes = db; //const db = require('../db/db.json');
  const deleted = notes.find(note => note.id === id);
  // console.log(deleted);//i log the one selected successfully
  if (deleted) {
    console.log(deleted); //i work
    console.log(id); //i work
    notes = notes.filter(note => note.id != id); //something is wrong with me
    console.log(notes); //shows all of them except the deleted array!!
    writeToFile('./db/db.json', notes); 
    res.json(notes);// am i needed???
    res.status(200).json(deleted);
  } else {
    res.status(404)
    .json({ message: "The note you are looking for does not exist :(" });
  }
});

module.exports = router;