var express = require('express');
var router = express.Router();

var Kitten = require('../mongooseConfig');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('aaaaa');
});

router.post('/addComment', function(req, res, next) {
  console.log("coming addcomment");
    var body = new Kitten({
        author: req.body.author,
        comment: req.body.comment   
    })
    body.save((err, data) => {
      res.send(body);
  })
});
router.post('/findCommentById', function(req, res, next) {
    console.log("coming findCommentById");
    var id = req.body._id;
    Kitten.findById(id).exec((err,data)=>{
       res.json(data)
    })
});
router.post('/deleteComment', function(req, res, next) {
  console.log("coming deleteComment");
    var id = req.body.id;
    Kitten.remove({_id: id}).exec((data)=>{
      res.json(data)
    })
});
router.post('/queryComment', function(req, res, next) {
  console.log("queryComment");
    Kitten.find().exec((err, data) => {
      res.json(data)
  })
});

router.post('/updateComment', function(req, res, next) {
  console.log("updateComment");
  var _id = req.body._id;
  var author = req.body.author;
  var comment = req.body.comment;
    Kitten.update({_id:_id},{author:author,comment:comment}).exec((err,data)=>{
      res.json(data)
    })
});


module.exports = router;
