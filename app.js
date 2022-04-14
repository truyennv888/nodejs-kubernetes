require('dotenv').config({ debug: true })
const express = require('express')
const app = express()

const port = process.env.PORT || 8080
const viewPath = __dirname + '/views/'

const db = require('./db')
const indexRoute = require('./routes/index.route')
const sharkRoute = require('./routes/shark.route')

app.engine('html', require('ejs').renderFile)
app.set('view engine', 'html');
app.use(express.urlencoded({ extended: true }))
app.use(express.static(viewPath))
app.use('/', indexRoute)
app.use('/sharks', sharkRoute)


app.listen(port, function(){
  console.log("The application running on port: ", port)
})