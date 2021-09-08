const router = require('express').Router()
const Note = require('../models/Note')

router.post('/', async (req,res)=>{
    const updatedNotesList = await Note.findByIdAndDelete(req.body._id)
    if(updatedNotesList) return res.json({status: 'successful'})
    res.json({status: 'idk'})
})

module.exports = router