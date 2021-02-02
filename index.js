const express = require('express')
const app = express()
const port = process.env.PORT || 3000

console.log(process.env.PORT);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/lol', (req, res) => {
  res.send('lolli!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})