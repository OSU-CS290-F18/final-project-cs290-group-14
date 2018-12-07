var fs = require('fs');
var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;
var MongoClient = require('mongodb').MongoClient;
var studentData = require('./studentData');
var app = express();
var mongoHost = process.env.MONGO_HOST || 'classmongo.engr.oregonstate.edu';
var mongoPort = process.env.MONGO_PORT || '27017';
var mongoUsername = process.env.MONGO_USERNAME || 'cs290_caiy';
var mongoPassword = process.env.MONGO_PASSWORD || 'cs290_caiy';
var mongoDBName = process.env.MONGO_DB_NAME || 'cs290_caiy';
var mongoURL = "mongodb://" +
		  mongoUsername + ":" + mongoPassword + "@" + mongoHost + ":" + mongoPort +
		  "/" + mongoDBName;

var mongoDB = null;
var port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static('public'));

app.engine('handlebars', exphbs({defaultLayout: 'main' }));
app.set('view engine', 'handlebars');


app.get('/',function(req,res){
  res.status(200).render('index')
});

app.get('/addresume',function(req,res){
  res.status(200).render('addresume');
});

/*app.get('/studentPage',function(req,res){
	  res.status(200).render('studentPage', {
		    student: studentData
		  });
		});
*/
app.get('/studentPage',function(req,res){
	 var studentCollection = mongoDB.collection('student');
	  studentCollection.find({}).toArray(function (err, studentData) {
	    if (err) {
	      res.status(500).send("Error connecting to Database");
	    }
	    res.status(200).render('studentPage', {
	      student: studentData
	    });
	  });
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

MongoClient.connect(mongoURL, function (err, client) {
	  if (err) {
	    throw err;
	  }
	  mongoDB = client.db(mongoDBName);
app.listen(port, function () {
console.log("== Server is listening on port", port);
	});
});
