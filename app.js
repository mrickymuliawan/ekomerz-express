const express = require('express')
const app = express()
const routes = require('./routes')
const bodyParser = require('body-parser')
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(routes)
app.use('/static', express.static('public'))

app.get('/', (req, res) => {
  return res.render('test')
})
app.listen(3000, () => {
  console.log(`server listen on port 3000`)
})
