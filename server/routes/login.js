const User = require('../models/User')
const bcrypt = require('bcryptjs')
const router = require('express').Router()
const jwt = require('jsonwebtoken')
const {loginValidation} = require('../validation')

router.post('/', async (req,res)=>{
    console.log('recieved')
    // res.json({status: 'hello world'})
    ////////////////////////////////////////////////MAYBE NOT NEEDED
    // Checking if entered details are correct
    // const {error} = loginValidation(req.body)
    // if(error) return res.json({error: error.details[0].message})

    //Checking if user is registered
    const user = await User.findOne({email: req.body.email})
    if(!user) return res.json({status: 'user not registered'})
    // console.log(user.username)
    //Checking if password is correct
    const validPassword = await bcrypt.compareSync(req.body.password, user.password)
    if(!validPassword) return res.json({status: 'incorrect password'})

    //Checking if username is correct
    if(req.body.username !== user.username) return res.json({status: 'incorrect username'})

    res.json({...user, status: 'last step left!'})
    //Creating and assigning a token
    // const token = jwt.sign({_id: user._id}, process.env.SECRET_TOKEN)
    // res.header('auth-token', token).json({token: token})
})

module.exports = router