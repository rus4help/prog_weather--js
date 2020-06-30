const express = require('express')
const bodyParser = require('body-parser')

const app = express()
// f034c141b4d4cf829b875f166fa58d68

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: true}))

app.get('/', (req, res) => {
    res.render('index')
})

app.post('/', (req, res) => {
    const {city} = req.body
    console.log(city);
    
    res.render('index')
})

app.listen(3000, () => {
    console.log('Сервер запущен. Порт 3000.')
})