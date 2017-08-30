var express = require('express');
var router = express.Router();

router.get('/android', function (req, res) {
    // res.sendFile('../views/pages/bootstrap_collapse.html')
    res.render('android.ejs')
});

router.get('/html5', function (req, res) {
   res.render('html5.html', {title : 'HTML5-'})
});


module.exports = router;

