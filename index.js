const express = require('express')
const menu = require('./routes/menu')

const app = express()

app.get('/', (req, res) => {
    res.status(200).json({"message": "dockerized food menu app base path"})
})
app.use('/menu', menu)
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

module.exports = app