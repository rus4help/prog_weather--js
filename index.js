const express = require('express')

const app = express()

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.end('Hello from nodejs')
})

app.listen(3000, () => {
    console.log('Сервер запущен. Порт 3000.')
})