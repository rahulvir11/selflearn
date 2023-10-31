const express = require('express');
const app = express();
const port = 4000;

app.set("viwe engine","ejs");
app.use(express.static("./public"));
app.get('/', function (req, res) {
  res.render('index.ejs');
})

app.listen(port,()=>{
    console.log("app listen on prot " + port);
})