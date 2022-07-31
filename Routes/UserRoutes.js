const express = require('express')
const router= express.Router()
const User = require('../models/User')

// add User @post
router.post('/newUser', (req,res)=>{
    let newUser = new User(req.body)
    newUser.save( (err,data)=>{
        err ? console.log(err) : res.send('user was added')
    })
})
// get User @get
router.get('/', (req,res)=>{
    User.find( {}, (err,data)=>{
        err ? console.log(err) : res.json(data)
    })
})
//update User by id @put
router.put( '/update/:id', (req,res)=>{
    User.findByIdAndUpdate( {_id:req.params.id}, {...req.body},(err,msg)=>{
        err ? console.log(err) : res.json({msg:'User was updated'})
    })
})

//delete User by id @delete
router.delete('/deleteUser/:id', (req,res)=>{
    User.findByIdAndDelete( {_id:req.params.id}, (err,msg)=>{
        err ? console.log(err) : res.json({msg:'User was deleted'})
    })
})

module.exports = router