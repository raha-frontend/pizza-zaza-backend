const express = require('express')

const data = require('./data')

const app = express()

app.use(express.urlencoded({
    extended: true
}))

app.use(express.json())

app.get('/api/products', (req, res) => {
    res.json(data)
})

// localhost:3001/api/products

app.listen(3001, () => {
    console.log('сервер запущен на порту 3001...')
})