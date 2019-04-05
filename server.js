var MongoClient = require('mongodb').MongoClient;

// Connect to the db
MongoClient.connect("mongodb://mongodb-6-servers-vm-0/users?replicaSet=rs0", function (err, db) {
   
     if(err) throw err;

     //Write databse Insert/Update/Query code here..
                
});
