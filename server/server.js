var http        = require('http');
var express     = require('express');
var mongoose    = require('mongoose');
var bodyParser  = require('body-parser');
var Event       = require('./app/models/event');
var saj         = require('simple-aes-json');

var app = express()

var dbUserName = '';
var dbPassword = '';
var dbURI      = '';

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

mongoose.connect(dbURI);

var port = process.env.PORT || 6060;

var router = express.Router();

router.use(function(req, res, next) {
  console.log('Request being made to: ' + req.path);
  next();
});

router.get('/', function(req, res) {
  res.json({message : 'Response.'});
});

router.route('/event')
  .post(function(req, res) {
    var encryptedData = req.body.eventData;
    var rawData = '';
    saj.decrypt(encryptedData, 'passphrase', function(result) {
      rawData = result;
    });
    var jsonData = JSON.parse(rawData);
    var newEvent = new Event();
    newEvent.proposedTimes = jsonData.proposedTimes;
    newEvent.invitees = jsonData.inviteeInformation;
    newEvent.eventDescription = jsonData.eventDescription;
    newEvent.eventLocation = jsonData.eventLocation;
    console.log(newEvent);
    newEvent.save(function(err) {
      if (err) {
        res.send(err);
      }
      res.json({message: 'Event ' + newEvent + ' created!'});
    });
  })

  .get(function(req, res) {
    Event.find(function(err, events) {
      if (err) {
        res.send(err);
      }
      res.json(events);
    });
  });

router.route('/event/:event_id')
  .get(function(req, res) {
    Event.findById(req.params.event_id, function(err, event) {
      if (err) {
        res.send(err);
      }
      res.json(event);
    })
  })

  .put(function(req, res) {
    Event.findById(req.params.event_id, function(err, event) {
      if (err) {
        res.send(err);
      }
      event.name = req.body.name;
      event.save(function(err) {
        if (err) {
          res.send(err);
        }
        res.json({message: 'Updated the event!'});
      });
    });
  })

  .delete(function(req, res) {
    Event.remove({
      _id: req.params.event_id
    }, function(err, event) {
      if (err) {
        res.send(err);
      }
      res.json({message: 'The event was deleted!'});
    });
  });



app.use('/api', router);

app.listen(port);

console.log('Server listening on port: ' + port);
