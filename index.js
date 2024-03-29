const express = require("express");
const path = require("path");
const app = new express();
const set = require("./Set/condig.json")


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('index'); 
  });

  app.get("/urunler", (req,res) => {


    res.render("urunler")
  })

  
app.listen(set.Port, () => {
    console.log(`Server listening at http://localhost:${set.Port}!`);
  });
