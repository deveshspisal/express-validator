const mongoose = require('mongoose')

const dbConfig = ()=>{
    mongoose.connect('mongodb://localhost:27017/express-validator')
        .then(()=>{
            console.log('connected to Db');
        })
        .catch((err)=>{
            console.log(err);
        })
}

module.exports = dbConfig