var express = require("express")
var app = express()
app.set('view engine','ejs')

app.get('/', function(req, res){
    res.render('test')
})

app.listen(4005, function(){
    console.log('RUNNING ON PORT 4005')
})