ToDo-List
=========

A ToDo-list app created to learn nodejs.

Connect to database
-------------------
```
//Connect to database local docker+mongodb
mongoose.connect('mongodb://127.0.0.1:27017/todo', {useNewUrlParser: true});

//Connect to database on mlab
mongoose.connect('mongodb://todo:todo_secret1@XXXXXXX.mlab.com:XXXXX/todo-list', {useNewUrlParser: true});

//Connect in Docker-Compose
mongoose.connect('mongodb://mongo:27017/todo', {useNewUrlParser: true}
```
Based on this Tutorial:
https://www.youtube.com/playlist?list=PL4cUxeGkcC9gcy9lrvMJ75z9maRw4byYp
