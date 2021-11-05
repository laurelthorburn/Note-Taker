const router = require('express').Router(); //using express
const path = require('path'); //__dirname? -- might not need


// GET /notes returns notes.html file
router.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '../public/notes.html'))
);

//GET * returns index.html file - I might be procedural, a fallback for your failures - always goes last
router.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '../public/index.html'))
);

module.exports = router;