const bodyParser = require('body-parser');
const mongoose = require('mongoose');


//Connect to database
mongoose.connect('mongodb://mongo:27017/todo', {useNewUrlParser: true}, function(err) {
  if (err) {process.exit(1);};
  console.log('Connected to database');
});

//Create a schema
var todoSchema = new mongoose.Schema({
  item: String
});

//Create Model
var Todo = mongoose.model('Todo', todoSchema);


var urlencodedParser = bodyParser.urlencoded({extended: false});

module.exports = function (app) {

  app.get('/todo', function(req,res) {

    console.log('GET /todo');
    console.log(req.url);

    //get data from mongodb and pass it to view
    Todo.find({}, function(err,data) {
      if (err) throw err;
      res.render('todo', {todos: data});
    });
  });

  app.post('/todo', urlencodedParser, function(req,res) {

    console.log('POST /todo');
    console.log(req.body);

    //get data from view and add it to monogodb
    var newTodo = Todo(req.body).save(function(err,data) {
      if (err) throw err;
      res.json(data);
    });

  });

  app.delete('/todo/:item', function(req,res) {

    console.log('DELETE /todo');
    console.log(req.params.item.replace(/\-/g, " "));

    //delete requestet item from mongodb
    Todo.find({item: req.params.item.replace(/\-/g, " ")}).remove(function(err,data) {
      if (err) throw err;
      res.json(data);
    });

  });
};
