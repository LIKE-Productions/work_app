// Requirements
var express = require('express'),
    ejs = require('ejs'),
    mammoth = require('mammoth')
var app = express();
app.set('view engine', 'ejs');


// Mammoth

mammoth.convertToHtml({path: "../../../../Downloads/Federal Gov't - Debate Sheet.docx"})
    .then(function(result){
        var html = result.value; // The generated HTML
        var messages = result.messages; // Any messages, such as warnings during conversion
    })
    .done();


app.get('/', function (req, res) {
    res.render('landing');
})
app.listen(4009, function () {
    console.log("Server ready on PORT 4009");
})