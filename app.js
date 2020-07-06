var express = require('express')
var app = express()
var dotenv = require('dotenv')
var util = require('./utils/util')

dotenv.config()
var port = process.env.PORT

app.use(express.json())

app.get('/', async (req, res) => {
    var result = await util.queryAllcars()
    var resData = await JSON.parse(result)
    console.log(resData)
    res.send(resData) 
})

app.get('/data', async (req, res) => {
    var result = await util.queryCar('CAR2')
    var resData = await JSON.parse(result)
    res.send(resData) 
})

app.get('/change', async (req, res) => {
    await util.changeCarOwner('CAR1', 'CJH')
    res.redirect('/')
})

app.listen(port, (req, res) => {
    console.log(`Server is Starting at http://localhost:${port}`)
})