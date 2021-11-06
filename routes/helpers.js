const fs = require('fs');
const util = require('util');

//Code is from Week 11, Day 3, 28-Student-Mini-Project
// Promise version of fs.readFile
const readFromFile = util.promisify(fs.readFile);

/** 
*  Function to write data to the JSON file given a destination and some content
*  @param {string} destination The file you want to write to.
*  @param {object} content The content you want to write to the file.
*  @returns {void} Nothing
*/

const writeToFile = (destination, content) =>
 fs.writeFile(destination, JSON.stringify(content, null, 4), (err) =>
   err ? console.error(err) : console.info(`\nData written to ${destination}`)
 );
/**
*  Function to read data from a given a file and append some content
*  @param {object} content The content you want to append to the file.
*  @param {string} file The path to the file you want to save to.
*  @returns {void} Nothing
*/
const readAndAppend = (content, file) => {
 fs.readFile(file, 'utf8', (err, data) => {
   if (err) {
     console.error(err);
   } else {
     const parsedData = JSON.parse(data);
     parsedData.push(content);
     writeToFile(file, parsedData);
   }
 });
};


//BONUS: DELETE
// Add delete route to the app
//DELETE /api/notes/:id = query parameter contains ID of note to delete.  Have to read all notes from db.json file and then remove note with given ID property and then rewrite notes to db.json file

module.exports = { readFromFile, writeToFile, readAndAppend, readAndDelete };