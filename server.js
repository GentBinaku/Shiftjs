'use strict';

const mongodb = require('mongodb');
const http = require('http');
const nconf = require('nconf');
let uri = 'mongodb://cluster0-shard-00-00-mw0gr.gcp.mongodb.net:27017,cluster0-shard-00-01-mw0gr.gcp.mongodb.net:27017/test?replicaSet=Cluster0-shard-0';
if (nconf.get('mongoDatabase')) {
  uri = `${uri}/${nconf.get('mongoDatabase')}`;
}
console.log(uri);

mongodb.MongoClient.connect(uri,{ useNewUrlParser: true } ,(err, db) => {
  if (err) {
    throw err;
  }

  // Create a simple little server.
  http.createServer((req, res) => {
    if (req.url === '/_ah/health') {
      res.writeHead(200, {
        'Content-Type': 'text/plain'
      });
      res.write('OK');
      res.end();
      return;
    }

    const collection = db.collection('Messages');
    var datetime = new Date();
    const msg = {
      msgDescription: '\nHello World received on ' + datetime
    };

    collection.insert(msg, (err) => {
      if (err) {
        throw err;
      }

      // push out a range
      let msglist = '';
      collection.find().toArray((err, data) => {
        if (err) {
          throw err;
        }
        data.forEach((msg) => {
          msglist += `${msg.msgDescription}; `;
        });

        res.writeHead(200, {
          'Content-Type': 'text/plain'
        });
res.write('Messages received so far:\n');
        res.end(msglist);
      });
    });
  }).listen(process.env.PORT || 8080, () => {
    console.log('started web process');
  });
});