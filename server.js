const express = require('express')
const cors = require('cors')
const { checkSchema, validationResult } = require('express-validator');

const app = express()

app.use(cors())
app.use(express.json())

const dbConfig = require('./config/db')
dbConfig()

const memberController = require('./app/controllers/member-controller')

const membersValidationSchema = {
    name : {
        notEmpty:{
            errorMessage : 'Name field is required'
        },
    },
    mobile : {
        notEmpty : {
            errorMessage : 'Mobile Number is required'
        },
        isLength:{
            options : {min : 10, max : 10},
            errorMessage : "Mobile Number should of 10 digit"
        },
        isMobilePhone:{
            errorMessage : 'Enter Valid Mobile number'
        }
    },
    address:{
        notEmpty : {
            errorMessage : "Address is required"
        },
        isLength :{
            options : {min:10,max : 250},
            errorMessage : "Address should be more than 10 characters and less than 250 character"
        }
    },
    age:{
        notEmpty : {
            errorMessage : 'Age is required'
        }
    }
}

app.get('/api/get-members',memberController.list)
app.post('/api/create-members',checkSchema(membersValidationSchema),memberController.create)

app.listen(3339,()=>{
    console.log('server running on port 3339');
})