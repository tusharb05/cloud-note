const router = require('express').Router()
const Note = require('../models/Note')

router.post('/', async (req,res)=>{
    const newNote = new Note({
        authorID: req.body.authorID,
        title: req.body.title,
        body: req.body.body
    })
    let savedNote = await newNote.save()
    if(savedNote) return res.json({note: savedNote, status:'note added'})
    res.json({status: 'failure'})
})

module.exports = router