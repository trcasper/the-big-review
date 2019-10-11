require('dotenv').config()
const express = require('express')
const massive = require('massive')

const app = express ()
app.use(express.json())

const {SERVER_PORT, CONNECTION_STRING} = process.env

massive(CONNECTION_STRING)
.then(db => {
    app.set(db)
    console.log('db connected')
})

app.listen(SERVER_PORT, console.log(`it be workin on Port: ${SERVER_PORT}`))
