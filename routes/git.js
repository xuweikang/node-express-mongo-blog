/**
 * Created by xuwk on 2016/12/12.
 */

var express = require('express');
var router = express.Router();

/* GET git page. */
router.get('/git', function(req, res, next) {
    res.render('git', { title: 'git页', name: 'git页'});
});

module.exports = router;