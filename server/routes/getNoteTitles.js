const router = require('express').Router()
const Note = require('../models/Note')

router.get('/:id', async (req,res)=>{
    // const newNote = new Note({
    //     authorID: '6135c9d52ef333284d5f2119',
    //     title: 'asdf',
    //     body: 'this is random body'
    // })
    // let savedNote = await newNote.save()
    console.log(req.params.id)
    const notesList = await Note.find({authorID: req.params.id})
    console.log(notesList)
    // console.log('recieved')
    res.json({found: notesList})
})

module.exports = router