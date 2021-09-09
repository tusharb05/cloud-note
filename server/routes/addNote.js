const router = require('express').Router()
const Note = require('../models/Note')

router.post('/', async (req,res)=>{
    // res.json(req.body)
    // res.json({
    //     authorID: req.body.id,
    //     title: req.body.title,
    //     body: req.body.body
    // })
    const newNote = new Note({
        authorID: req.body.authorID,
        title: req.body.title,
        body: req.body.body
    })
    let savedNote = await newNote.save()
    if(savedNote) return res.json({status:'note added'})
    res.json({status: 'failure'})
})

module.exports = router