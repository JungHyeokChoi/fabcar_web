var express = require('express')
var app = express()
var path = require('path')
var bodyParser = require('body-parser')
var cors = require('cors')
var apiRouter = require('./routes/Router')
require('dotenv').config()

var mongoose = require('mongoose');
mongoose.Promise = global.Promise

var password = process.env.PASSWORD
var DB = process.env.DB
var url = `mongodb+srv://root:${password}@cluster0.lkryw.mongodb.net/${DB}?retryWrites=true&w=majority`
mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true});

app.set('views', path.resolve(__dirname + '/views'))
app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

app.use(express.static(__dirname + '/public'))
app.use(express.static(path.join(__dirname, 'public/css/')));

app.use('/', apiRouter)

app.use(cors())

var port = process.env.PORT || 3000
app.listen(port, (req, res) => {
    console.log(`Server is Starting at http://localhost:${port}`)
})