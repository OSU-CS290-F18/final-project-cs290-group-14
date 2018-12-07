var fs = require('fs');
var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');
var studentData = require('./studentData');
var bodyParser = require('body-parser');

var app = express();
var port = process.env.PORT || 3000;


app.engine('handlebars', exphbs({defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(bodyParser.json());
app.use(express.static('public'));

app.get('/',function(req,res){
  res.status(200).render('index')
});

app.get('/addresume',function(req,res){
  res.status(200).render('addresume');
});

app.get('/studentPage',function(req,res){
	  res.status(200).render('studentPage');
	});


app.get('/studentPage/:student', function(req, res, next) {
	  var st = req.params.student.toLowerCase();
	  	if (studentData[st]) {
	    res.render("partials/studentInfo", studentData[st]);
		  console.log("single student page");
	  }
	  	else {
	    next();
	  }
});

app.get('*', function (req, res) {
	  res.status(404).render('404');
	});

app.listen(port, function () {
  console.log("== Server is listening on port", port);
});