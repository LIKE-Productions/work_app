// Requirements
var express    = require('express'),
ejs            = require('ejs'),
mammoth        = require('mammoth'),
mammothBrowser = require('./public/stylesheets/mammoth.browser.js'),
marked         = require('marked'),
fs             = require('fs');
var app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'))


app.get('/', function (req, res) {
    res.render('landing');
})

app.get('/docx', function (req, res) {
    res.render('docx')
})

app.get('/markdown', function(req, res){
    res.render('md-converter')
})

app.get('/about', function(req,res){
    res.render('README')
})

app.listen(process.env.PORT || 4009, function () {
    console.log("Server ready on PORT 4009");
})
