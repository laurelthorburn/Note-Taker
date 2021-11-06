//dependencies
const express = require('express'); //using express
const htmlRoute = require('./routes/htmlRoutes');
const apiRoute = require('./routes/apiRoutes');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.static('public')); //loads root file, links js file and your css file

// have to use app.use to parse JSON
app.use(express.json());

//calling in our routes (modular)
app.use(apiRoute);
app.use(htmlRoute); 

//Listen on PORT
app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);

