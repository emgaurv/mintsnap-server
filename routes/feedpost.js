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
newFeed.feed.name = "Gaurav Pandey";
newFeed.feed.topic = req.body.topic;
newFeed.feed.context = req.body.context;
newFeed.feed.filepath = req.body.filepath;
newFeed.feed.country = "INDIA";
newFeed.feed.views = Math.round(i);
newFeed.feed.date = req.body.date;
newFeed.save();
res.send(post.name);
/*res.redirect('/dashboard');
*/
});

module.exports = router;
