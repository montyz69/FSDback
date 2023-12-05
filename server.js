require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')

mongoose.connect(process.env.DATABASE_URL)
const db = mongoose.connection
db.on('error', (error) =>  console.log(error))
db.once('open', () =>  console.log("Connected to db"))

app.use(express.json())

const router = require('./routers/v1')
app.use('/v1', router)

app.listen(3000, () => console.log("Server started"))
