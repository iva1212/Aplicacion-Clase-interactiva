var express = require('express');
var bodyParser = require('body-parser');
var Pusher = require('pusher');


var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const pusher = new Pusher({
    appId: "1104088",
    key: "db3677b071c2b31041e1",
    secret: "6a062e3878f2ea8d2846",
    cluster: "us3",
    useTLS: true
  });

app.get('/', function(req, res){ // for testing if the server is running
  res.send('all is well...');
});

app.post('/pusher/auth', function(req, res) {
  var socketId = req.body.socket_id;
  var channel = req.body.channel_name;
  var auth = pusher.authenticate(socketId, channel);
  res.send(auth);
});

app.set('PORT', process.env.PORT || 5000);

app.listen(app.get('PORT'), () => 
  console.log('Listening at ' + app.get('PORT')))