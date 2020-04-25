//Dependencies
var express = require("express")
mongoose = require("mongoose")
app = express()

//MongoDB setup
mongoose.connect('mongodb://localhost:27017/work_app', { useNewUrlParser: true })
mongoose.set('useUnifiedTopology', true);

//Schema
var emailSchema = new mongoose.Schema({
    email: String,
})
var email =  mongoose.model("Email", emailSchema)


//Content
app.set('view engine','ejs')

app.get('/', function(req, res){
    res.render('landing')
})

//Server call
app.listen(4005, function(){
    console.log('RUNNING ON PORT 4005')
})