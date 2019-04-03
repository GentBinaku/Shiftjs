const express = require('express');
const app = express();
const bodyParser = require('body-parser');


const PORT = 3000;

app.listen(PORT, function(){
   console.log('Server is running on Port',PORT);
});