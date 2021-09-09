const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const registerRoute = require('./routes/register')
const loginRoute = require('./routes/login')
const getNotes = require('./routes/getNotes')
const updateNoteRoute = require('./routes/editNote')
const cors = require('cors')
const deleteNoteRoute = require('./routes/deleteNote')

const PORT = process.env.PORT || 5000
const app = express()

dotenv.config()

mongoose.connect(process.env.DB_CONNECT, {useNewUrlParser: true, useUnifiedTopology: true})

//Middleware
app.use(express.json())
app.use(cors())

//Route middleware
app.use('/api/user/register', registerRoute)
app.use('/api/user/login', loginRoute)
app.use('/api/notes/titles', getNotes)
app.use('/api/notes/delete', deleteNoteRoute)
app.use('/api/notes/update', updateNoteRoute)

app.listen(PORT, ()=>console.log('Server running'))