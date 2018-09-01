var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
      name: String,
      topic: String,
      context: String,
      filepath: String,
      country: String,
      views: String,
      date: String,
  });
module.exports = mongoose.model('feedpost', userSchema);
