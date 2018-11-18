require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')

const { SERVER_PORT } = process.env

const input = require('./input/input')

const app = express()

app.use(bodyParser.json())

app.get('/api/tests', (req, res) => {
  res.status(200).send(input)
})

app.listen(SERVER_PORT, () => console.log(`Server is running on port ${SERVER_PORT}`))
