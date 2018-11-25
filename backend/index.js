const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const giftRoute = require('./routes/gift-route')

const app = express()

// cors(app)
app.use(bodyParser.json())

app.use('/gifts', giftRoute)

app.listen(3000, () => {
  console.log(`Express server running at http://0.0.0.0:3000/`)
})
