var express = require('express')
var app = express();
var path = require('path')
var router = express.Router();

app.get('/', function(req,res){
	res.redirect('/index')
})

app.get('/index', function(req,res){
	res.sendFile(path.join(__dirname+"/Views/index.html"))
})

app.get('/read-todo', function(req,res){
	res.sendFile(path.join(__dirname+"/Views/read-todo.html"))
})

app.get('/todo', function(req,res){
	res.sendFile(path.join(__dirname+"/Views/todo.json"))
})


app.use(express.static(__dirname+'/Views'))
app.use('/', router);

app.listen(3200, function(){
	console.log("Server is running on port 3200")
})