const express = require('express');
const todoController = require('./controllers/todoController');

// setup express
var app = express();

// setup template engine ejs
app.set('view engine', 'ejs');

// static files
app.use('/css', express.static('./css'));
app.use('/assets', express.static('./assets'));

// fire controllers 
todoController(app);

// listen to port
app.listen(80);
console.log('server startet on port 80');
