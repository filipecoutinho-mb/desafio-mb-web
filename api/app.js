const express = require('express')
const path = require('path')
const routes = require('./routes/routes')

const app = express()
const port = 3000

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// routes
app.get('/', (req, res) =>
  res.send(
    '<h1>Bem vindo à API da MB</h1><ol><li>Acesse /registration para autenticação.</li></ol>'
  )
)
app.use('/registration', routes)
app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}/`)
})
