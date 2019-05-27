var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var PORT = process.env.PORT || 8080;

// create application/json parser
// var jsonParser = bodyParser.json()
 
// create application/x-www-form-urlencoded parser
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json({type: 'application/++json'}))

// parse custom items in the buffer
app.use(bodyParser.raw({type: 'application/vnd.custom-type'}))

// parse html body into a string
app.use(bodyParser.text({ type: 'text/html'}))

require("./app/routing/app-routes")(app);
require("./app/routing/html-routing")(app);
 
 
app.listen(PORT, function(){
  console.log("App is listening on port: " + PORT);
});