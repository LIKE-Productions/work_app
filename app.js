// Requirements
var express = require('express')
ejs =         require('ejs')
var app = express()
app.set('view engine','ejs')

app.get('/', function(req,res){
    res.render('landing')
})
app.listen(4009,function(){
    console.log("Server ready on PORT 4009")
})