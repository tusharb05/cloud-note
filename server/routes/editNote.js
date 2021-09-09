const router = require('express').Router()
const Note = require('../models/Note')

router.post('/:blogID', async (req,res)=>{
    let updatedNote = await Note.findByIdAndUpdate(req.params.blogID,{title:req.body.newTitle, body: req.body.newBody})
    if(updatedNote) return res.json({status:'successfully updated'})
})

module.exports = router