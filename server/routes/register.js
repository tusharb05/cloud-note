const router = require('express').Router()
const bcrypt = require('bcryptjs')
const User = require('../models/User')
const {registerValidation} = require('../validation')

router.post('/', async (req,res)=>{
    //Checking if entered values meet the requirements
    const {err} = registerValidation(req.body)
    if(err) return res.status(400).send(error.details[0].message)

    //Checking if user already has an accound with same email
    const emailExist = await User.findOne({email: req.body.email})
    if(emailExist) return res.status(400).send('email exists')

    //Hashing password
    const salt = await bcrypt.genSaltSync(10)
    const hashedPassword = await bcrypt.hashSync(req.body.password, salt)

    //Saving user to the database
    const user = new User({
        username: req.body.username,
        email: req.body.email,
        password: hashedPassword
    })

    try{
        const savedUser = await user.save()
    }catch(error){
        res.status(400).send(error)
    }
})

module.exports = router