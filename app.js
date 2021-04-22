const express = require('express')
const app = express()
const routes = require('./routes')
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(routes)
app.get('/', (req, res) => {
  res.json({
    message: 'OKE'
  })
})
app.listen(3000, () => {
  console.log(`server listen on port 3000`)
})
