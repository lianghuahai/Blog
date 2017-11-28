var express = require('express');
var router = express.Router();
var User = require('../mongooseConfig');


/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('login');
});
router.get('/checkLogin', function(req, res, next) {
    res.send('ok')
});

module.exports = router;
