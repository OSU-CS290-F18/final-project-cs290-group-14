var path = require('path');
var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(express.static('public'));

app.engine('handlebars', exphbs({deafaultLayout: 'main'}));
app.set('view engine', 'handlebars');


app.get('/',function(req,res){
  res.status(200).render('index')
});

app.get('/addresume',function(req,res){
  res.status(200).render('addresume');
});

app.get('*', function (req, res) {
  res.status(404).render('404Page');
});

app.listen(port, function () {
  console.log("== Server is listening on port", port);
});
