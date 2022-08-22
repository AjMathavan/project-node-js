
const express = require('express')
const mongoose = require('mongoose')
const app = express()

// mongodb connection dude
const url = 'mongodb://localhost/mathavanDBex'
mongoose.connect(url, {useNewUrlParser:true})
const con = mongoose.connection
con.on('open', () => {
    console.log('Db connected...')
})

app.use(express.json())
const EmployeeRouter = require('./controller/router.js')
app.use('/login',EmployeeRouter)



//url---------------------http://localhost:3000/login
app.listen(3000, () => {
    console.log(`Server started on 3000!!!`)
})
