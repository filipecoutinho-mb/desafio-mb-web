require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const logger = require('morgan')
const routes = require('./routes/routes')

const app = express()

app.use(logger('dev'))
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

const dbURI = `mongodb+srv://${process.env.DB_USR}:${process.env.DB_PWD}@banquinho.re3jwb7.mongodb.net/?retryWrites=true&w=majority`
mongoose
  .connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err))


// routes
app.get('/', (req, res) =>
  res.send(
    '<h1>Bem vindo à API da MB</h1><ol><li>Acesse /registration para autenticação.</li></ol>'
  )
)
app.use('/registration', routes)