//dependencies
const express = require('express'); //using express
const fs = require('fs');
const path = require('path'); //__dirname? -- might not need
var uniqid = require('uniqid'); //creates unique ID - change to const?

const PORT = 3001;
const app = express();

//psuedo code: need to store/retrieve 'fs'