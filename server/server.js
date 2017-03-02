
var express     = require('express');
var mongoose    = require('mongoose');
var bodyParser  = require('body-parser');
var Event       = require('./app/models/event');
var app = express()

var dbUserName = 'ksaghari';
var dbPassword = 'testEnvironment767';
var dbURI      = 'mongodb://' + dbUserName + ':' + dbPassword + '@ds047622.mlab.com:47622/cas_767_environment';

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

mongoose.connect(dbURI);

var port = process.env.PORT || 6060;

var router = express.Router();

router.use(function(req, res, next) {
  console.log('Middleware logging.');
  next();
});

router.get('/', function(req, res) {
  res.json({message : 'Response.'});
});

router.route('/event')
  .post(function(req, res) {
    var newEvent = new Event();
    newEvent.name = req.body.name;
    newEvent.save(function(err) {
      if (err) {
        res.send(err);
      }
      res.json({message: 'Event ' + newEvent.name + ' created!'});
    });
  });

app.use('/api', router);

app.listen(port);

console.log('Server listening on port: ' + port);
