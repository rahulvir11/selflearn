const express = require('express')
const app = express()
const port = 4000

app.set("view engine","ejs");
app.get('/', (req, res) => {
  res.render('index.ejs')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})