const express = require('express')
const app = express ()
const mongoose = require('mongoose')
//connexion database with server
const mongoUri = 'mongodb+srv://marwa123:marwa123@cluster0.mrgof.mongodb.net/?retryWrites=true&w=majority'
// parse the data
app.use(express.json())
app.use('/User', require('./Routes/UserRoutes'))
mongoose.connect(mongoUri, (err)=>{
    err? console.log(err) : console.log('database is connected')
})
const port = 5000
app.listen (port, (err)=>{
    err ? console.log(err) : console.log ('server is running on port 5000')
})