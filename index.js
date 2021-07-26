const express = require('express')
const menu = require('./routes/menu')

const app = express()

app.use('/menu', menu)
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

module.exports = app