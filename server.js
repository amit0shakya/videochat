const express = require('express')
const app = express()
const port = process.env.PORT || '3000';

app.set('views', __dirname + '/public/views/');
app.engine('html', require('ejs').renderFile);


app.use('/js', express.static('public/js/'))

app.get('/', function (req, res) {
  //res.send('Hello World!')
  res.render('index.html');
})

app.listen(port, function () {
  console.log('Example app listening on port '+port)
})