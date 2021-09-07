const router = require('express').Router()
const Note = require('../models/Note')

router.get('/:id', async (req,res)=>{
    // const newNote = new Note({
    //     authorID: '6135c9d52ef333284d5f2119',
    //     title: 'second title',
    //     body: 'body of the second title go brrrrr'
    // })
    // let savedNote = await newNote.save()
    console.log(req.params.id)
    const notesList = await Note.find({authorID: req.params.id})
    console.log(notesList)
    // console.log('recieved')
    res.json({found: notesList})
})

module.exports = router