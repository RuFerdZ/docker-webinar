const express = require('express')
const something = require('./src/somefiles');
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!sdss'))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))