var express = require('express')
var app = express()
var dotenv = require('dotenv')

dotenv.config()
var port = process.env.PORT

app.listen(port, (req, res) => {
    console.log(`Server is Starting at http://localhost:${port}`)
})