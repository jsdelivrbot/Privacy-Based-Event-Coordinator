var mongoose   = require('mongoose');
var Schema     = mongoose.Schema;
var EventSchema = new Schema({
  proposedTimes : [],
  invitees: [],
  eventDescription: String,
  eventLocation: String
});

module.exports = mongoose.model('Event', EventSchema);
