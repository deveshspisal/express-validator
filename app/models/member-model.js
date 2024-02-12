const mongoose = require('mongoose')

const{model, Schema} = mongoose

const memberSchema = Schema({
    name : String,
    mobile : String,
    address : String,
    gender : String,
    age : Number,
})

const Member = model('Member',memberSchema)

module.exports = Member