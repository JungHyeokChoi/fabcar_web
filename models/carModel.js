var mongoose = require('mongoose')

var carSchema = mongoose.Schema({
    key : {
        type : String,
        required: true
    },
    color : {
        type : String,
        required: true
    },
    doctype : {
        type : String,
        required: true
    },
    make : {
        type : String,
        required: true
    },
    model : {
        type : String,
        required: true
    },
    owner : {
        type : String,
        required: true
    },
    createAt : {
        type : Date,
        default : Date.now
    }
})

var Car = mongoose.model('car', carSchema)
module.exports = Car