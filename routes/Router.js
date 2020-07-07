var router = require('express').Router()
var queryUtil = require('../utils/util')
var Car = require('../models/carModel')

router.route('/')
    .get(async (req, res) => {
        var result = await queryUtil.queryAllcars()
        var resultData = await JSON.parse(result)

        console.log(result)

        res.render('index', {data : resultData})
    })

router.route('/search')
    .get(async (req, res, next) => {
        var searchData = req.query.search
        var result = await queryUtil.queryCar(searchData)
        var resultData = await JSON.parse(result)

        res.render('search', {data : resultData, key : searchData})  
    })

router.route('/save/:carNum')
    .get(async (req, res, next) => {
        var searchData = req.params.carNum
        var result = await queryUtil.queryCar(searchData)
        var resultData = await JSON.parse(result)

        res.render('save', {data : resultData, key : searchData})  
    })
    .post((req, res, next) =>{
        var contact = new Car()

        contact.key = req.body.key
        contact.color = req.body.color
        contact.doctype = req.body.doctype
        contact.make = req.body.make
        contact.model = req.body.model
        contact.owner = req.body.owner

        contact.save((err, result) => {
            if(err) next(err)
            console.log(result)
            res.redirect('/')
        })
    })
module.exports = router;