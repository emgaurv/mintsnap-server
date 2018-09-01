var express = require('express');
var Feed = require('../models/feed');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
//  var newFeed = new Feed();
  Feed.find({}, (err, feeds) => {
            res.json(feeds) })
//  res.send('FEED');
});

/* GET users listing. */
router.get('/:filter', function(req, res, next) {
//  var newFeed = new Feed();
var filter = req.params.filter;

var query = {  };
  Feed.find({topic:req.params.filter}, (err, result) => {
    if(result == ""){

    res.json({ data: "no data found" });
    }else{
      res.json(result)
    }

  });
//  res.send('FEED');
});

module.exports = router;
