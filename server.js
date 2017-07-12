const express = require('express')
const app = express()

app.set('views', __dirname + '/public/views/');
app.engine('html', require('ejs').renderFile);

app.use('/js', express.static('public/js/'))

app.get('/', function (req, res) {
  //res.send('Hello World!')
  res.render('index.html');
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})