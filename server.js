var express = require('express');
const app = express();
const mongoose = require('mongoose');
const tinyUrl = require('./models/tinyUrl');
const path = require('path');

app.use(express.static(__dirname+'/public'));

mongoose.connect(process.env.MONGO_URL || "mongodb://localhost/urlShortener", {
  useNewUrlParser: true, useUnifiedTopology: true
})

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));

app.get('/', async (req, res) => {
  const tinyUrls = await tinyUrl.find()
  res.render('index', { tinyUrls: tinyUrls })
})

app.post("/tinyUrls", async (req, res) => {
  await tinyUrl.create({ full: req.body.fullUrl})
  res.redirect('/')
})

app.get('/:tinyUrl', async (req, res) => {
  const tinyurl = await tinyUrl.findOne({ short: req.params.tinyUrl})
  if (tinyurl == null) return res.sendStatus(404)

  tinyurl.clicks++
  tinyurl.save()

  res.redirect(tinyurl.full)
})


app.listen(process.env.PORT || 3000, function(error){
  if (error){
    console.log("Uh Ohhhhhhh ", error);
  } else{
    console.log("Server is lisenting on ", process.env.PORT);
  }
})
