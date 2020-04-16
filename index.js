var express = require('express');
var app = express();
var port = 3000;

app.get('/', function(request, response){
	response.send("<h1>Nội dung trả về.</h1>")
});

app.get('/users', function(request, response){
	response.send("List users");
});

app.listen(port, function(){
	console.log("Is Done!" + port);
});