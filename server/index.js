const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const registerRoute = require('./routes/register')
const loginRoute = require('./routes/login')

const PORT = process.env.PORT || 5000
const app = express()

dotenv.config()

mongoose.connect(process.env.DB_CONNECT, {useNewUrlParser: true, useUnifiedTopology: true})

//Middleware
app.use(express.json())

//Route middleware
app.use('/api/user/register', registerRoute)
app.use('/api/user/login', loginRoute)

app.listen(PORT, ()=>console.log('Server running'))