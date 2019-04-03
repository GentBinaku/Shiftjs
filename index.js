const express = require('express');
const app = express();
const bodyParser = require('body-parser');


const PORT = 3000;


app.get('/', function(req, res){
  res.render('index.js');
});

app.listen(PORT, function(){
   console.log('Server is running on Port',PORT);
});