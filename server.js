const express = require('express');
const app = express();
const bodyParser = require('body-parser');


const PORT = 3000;

app.get('/checking', function(req, res){
  res.json({
     "Tutorial": "Welcome to the Node express JWT Tutorial"
  });
});

app.listen(PORT, function(){
   console.log('Server is running on Port',PORT);
});