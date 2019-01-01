# ToDo-List

A ToDo-list app created to learn nodejs, docker and git.

Data will be stored in a `mongodb` in the docker-compose environment and `will be destroyed if the container is destroyed`.
Under `"Connect to Database"` are alternative methods to store the mongodb.

## TODO

* Make a nice design (learn css)
* Change Logo
* make mongodb persitant
* add a confirm-request for deleting
* get now.json working

## Prepare

```bash
prepare:
    npm install
    docker build -t phreak1n/todo-list .

run:
    docker-compose up -d
```

## Connect to database

Change in controllers/todocontrollers.js the line under `//Connect to database` to change he method used to connect to a mongodb

```node
//Connect to database local docker+mongodb
mongoose.connect('mongodb://127.0.0.1:27017/todo', {useNewUrlParser: true});

//Connect to database on mlab
mongoose.connect('mongodb://<<USER>>:<<PASSWORD>>@XXXXXXX.mlab.com:<<PORT>>/todo-list', {useNewUrlParser: true});

//Connect in Docker-Compose
mongoose.connect('mongodb://mongo:27017/todo', {useNewUrlParser: true}

//Connect in Dockerfile with intern mongodb
mongoose.connect('mongodb://127.0.0.1:27017/todo', {useNewUrlParser: true}
```

## Build singel docker

```
//use "Connect in Dockerfile with intern mongodb"
docker build -t phreak1n/todo-list:now -f .\dockerfile_now .
```
Based on this Tutorial:
<https://www.youtube.com/playlist?list=PL4cUxeGkcC9gcy9lrvMJ75z9maRw4byYp>
