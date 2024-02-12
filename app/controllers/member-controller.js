const Member = require('../models/member-model')
const { check, validationResult } = require('express-validator');

const memberController = {}

memberController.list = (req,res)=>{
    Member.find()
        .then((members)=>{
            res.json(members)
        })
        .catch((err) =>{
            console.log(err);
        })
}


memberController.create = (req,res) =>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json(errors)
    }
    const body = req.body
    const memberData = new Member(body)
    memberData.save()
        .then(()=>{
            res.json(memberData)
        })
        .catch((err)=>{
            res.json(err)
        })
}

module.exports = memberController