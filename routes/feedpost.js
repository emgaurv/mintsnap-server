var express = require('express');
var router = express.Router();
var Feed = require('../models/feed');
var multer = require('multer');
  var realname;

  
var Storage = multer.diskStorage({
destination: function (req, file, callback) {
callback(null, "./public/images");
},
filename: function (req, file, callback) {
 realname = file.fieldname + "_" + Date.now() + "_" + file.originalname;
callback(null, realname);
}
});

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('ENTRY RESTRICTED');
});

var upload = multer({ storage: Storage }).array("imgUploader", 2);
router.post('/',upload,function(req, res, next) {


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
newFeed.cover = req.files[0].filename;
newFeed.pdfpath = req.files[1].filename;
newFeed.save();
/*res.redirect('/dashboard');
*/
});

module.exports = router;
