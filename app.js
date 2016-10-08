var express = require("express")

var app = express();

// Template Engine - Handlebars
var handlebars = require('express-handlebars').create({
    defaultLayout: 'main'
});
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

// app.use(bodyParser.urlencoded({extended: true}));
// app.use(express.static(__dirname + "/public"));

app.get("/", function(req, res){
	res.render("home");
});

app.get("/about", function(req, res){
	res.render("about");
});

app.listen(process.env.PORT, function(){
	console.log("Demo Started at " + process.env.PORT);
});