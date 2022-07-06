require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()

app.use(express.json())
app.use(cors())

const port = 3456

const ctrl = require('./controller')

app.get('/representatives/:state', ctrl.searchRep)
app.get('/senators/:state', ctrl.searchSen)

app.listen(port, console.log(`Server running on port ${port}`))