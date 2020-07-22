const express = require('express');
const router = express.Router();
const showcase = require('../data/showcase.js');
const config = require('../data/config.js');

// require('es6-promise').polyfill();
const fetch = require('node-fetch')

router.get('/', function (req, res, next) {
    // request(config.javaServer + '/search', (error, response, body) => {
    //     // console.log('error:', error); // 返回错误信息
    //     // console.log('statusCode:', response && response.statusCode); // 返回请求的状态码
    //     // console.log('body:', body); // 返回回来的数据
    //     res.send(body);
    // })

    let url = config.javaServer + '/search?tags=News'
    // if (req.params != null) {
    //     url += "?"
    //     Object.keys(req.params).forEach(key, index => {
    //         if (index != 0) {
    //             url += '&' + key + '=' + req.params[key]
    //         }
    //     })
    // }
    console.log(url)
    fetch(url, { // URL如不写http等，则会使用host自动补全
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then((resf) => {
            return resf.json()
        })
        .then((resf) => {
            console.log(resf) // 获取JSON数据
            res.render('index', {
                title: config.title,
                carouselList: config.carouselList,
                showcaseList: resf
            });
        })
});

router.get('/android', function (req, res) {
    res.render('android.ejs', showcase.filter("News"))
});

router.get('/front-end', function (req, res) {
    res.render('front_end.ejs', {
        title: 'front-end'
    })
});

router.get('/game', function (req, res) {
    res.render('game.ejs', {
        games: showcase.filter("Game")
    });
});
router.get('/admin', function (req, res) {
    res.render('admin.ejs', {
        games: showcase.filter("Game")
    });
});


module.exports = router;