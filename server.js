var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');

var studentData = require('./studentData');

var app = express();
var port = process.env.PORT || 3000;


app.engine('handlebars',exphbs({defaultLayout:'main'}));
app.set('view engine', 'handlebars');

app.use(express.static('public'));


app.get('/', function(req, res, next) {
	  res.status(200).render('index', {});
	  console.log("Index page");
	});

app.get('/students', function(req, res)  {
	res.status(200).render('studentPage', studentData);
    console.log("student page");
});

app.get('/students/:student', function(req, res, next) {
	  var st = req.params.student.toLowerCase();;
	  	if (studentData[st]) {
	    res.render("partials/studentInfo", studentData[st]);
		  console.log("single student page");
	  } 
	  	else {
	    next();
	  }
});

app.get("*", function (req, res, next) {
	  res.status(404).render('404', {});
	  console.log("404 not found");
	});



app.listen(port, function () {
  console.log("== Server is listening on port", port);
});
