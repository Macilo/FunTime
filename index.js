const express = require('express')

// to be able to use path tools
const path = require('path')

const app = express()

// middleware
const logger = (req, res, next) => {
  console.log('What it do baby')
  next()
}

// using middleware
app.use(logger)
const users = require(path.join(__dirname, 'models', 'users'))

// gets all users
app.get('/api/users', (req, res) => {
  res.json(users)
})

// set up static folder
app.use(express.static(path.join(__dirname, 'public')))

// app.get('/', (req, res) => {
/// /  res.sendFile(path.join(__dirname, 'public', 'index.html'))
// })

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))

// notes
// middleware = functions that have access to req and res and can be used to change things
