// Requirements
var express = require('express'),
    ejs = require('ejs'),
    mammoth = require('mammoth'),
    mammothBrowser = require('./mammoth.browser.js')
var app = express();
app.set('view engine', 'ejs');



app.get('/', function (req, res) {
    res.render('landing');
})

app.get('/docx', function (req,res){
    res.render('docx')
})

app.listen(4009, function () {
    console.log("Server ready on PORT 4009");
})

