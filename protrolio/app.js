const express = require('express')
const app = express()
const port = 4000
const userModel = require("./database");
app.set("view engine","ejs");

app.get('/', (req, res) => {
  res.render('index.ejs')
});
//create user one uers on mongodb(database)
// app.get('/create', async (req, res) => {
//   const createuser = await userModel.create([{
//     username:"rahul",
//     name:"rahul",
//     age:21
//     },
//     {
//     username:"rahul1",
//     name:"rahul1",
//     age:22
//   }]);
//   console.log(createuser);
//   res.send(createuser);
// });

// find function return all user(document) on data base
// app.get("/find",async (req,res)=>{
//   let finduser=await userModel.find();
//    res.send(finduser);
// });

//findOne function return user(document), you wants if user does't existing return null 
// app.get("/find",async (req,res)=>{
//   let finduser=await userModel.findOne({username:"rahul"});
//    res.send(finduser);
// });

// delet user(document) on database
// app.get("/delete",async (req,res)=>{
//   let deleteduser = await userModel.findOneAndDelete({username:"rahul"});
//    res.send(deleteduser);
//});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})