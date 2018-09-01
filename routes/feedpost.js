var express = require('express');
var Feed = require('../models/feed');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('ENTRY RESTRICTED');
});


router.post('/', function(req, res, next) {
var post=req.body;
/*var topic = ;
var context = ;
var filepath = ;
var country = ;
var views = ;
var date = ;*/
/*------putting data to database-------------*/
var i =  Math.random() * (100 - 10) + 10;
var newFeed = new Feed();
newFeed.name = req.body.name;
newFeed.topic = req.body.topic;
newFeed.context = req.body.context;
newFeed.filepath = req.body.filepath;
newFeed.country = "INDIA";
newFeed.views = Math.round(i);
newFeed.date = req.body.date;
newFeed.save();
res.send(post.name);
/*res.redirect('/dashboard');
*/
});

module.exports = router;
