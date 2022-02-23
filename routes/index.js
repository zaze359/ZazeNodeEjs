const express = require('express');
const router = express.Router();
const showcase = require('../data/showcase.js');
// 加载配置
const config = require('../data/config.js');
// require('es6-promise').polyfill();
const fetch = require('node-fetch')

var indexData = {
    title: "ZZ Express",
    carouselList: [
        {
            "carouselImg": "/images/1.png",
            "carouselUrl": "/android"
        }, {
            "carouselImg": "/images/2.png",
            "carouselUrl": ""
        }, {
            "carouselImg": "/images/3.png",
            "carouselUrl": ""
        }
    ],
    games: [
        showcase(
            "明日方舟",
            "https://ak.hypergryph.com/",
            "《明日方舟》（《明日方舟Arknights》）是一款策略手游。你将作为罗德岛的一员,与罗德岛公开领导人阿米娅一同,雇佣人员频繁进入天灾影响后的高危地区,救助受难人群,处理矿石争端,以及对抗未知阻碍—— “罗德岛”的战术头脑,需要您的对策,请指引我们的航向。",
            "wiki", "http://ak.mooncell.wiki/",
            "https://ak.hypergryph.com/user/public/images/logo.png",
// "http://ak.mooncell.wiki/ak.png"
        ), showcase(
            "黑色沙漠台服",
            "https://www.tw.playblackdesert.com/",
            "Pearl Abyss MMO的開始 黑色沙漠 Remastered，更加真實的冒險正在等待著您。超越真實感，與玩家共享感動的黑色沙漠。",
            "官网", "https://www.tw.playblackdesert.com/",
            "https://s1.pearlcdn.com/TW/contents/img/common/header_logo_tw.png",
        )
    ],
    showcaseList: [{
        "showcaseTime": "2017-09-01",
        "showcaseImg": "http://image.g-cores.com/f57d1439-bad1-4770-ae0a-79b65660cf43.jpg?x-oss-process=style/original_hs",
        "showcaseTag": "News",
        "showcaseTagUrl": "http://www.g-cores.com/categories/2",
        "showcaseTitle": "CEDEC AWARDS 2017塞尔达“一箭双雕”，坂口博信获特别奖",
        "showcaseTitleUrl": "http://www.g-cores.com/articles/26950",
        "showcaseInfo": "只有来自同行的肯定，才是赤裸裸……呃，赞美"
    }, {
        "showcaseTime": "2017-09-01",
        "showcaseImg": "http://image.g-cores.com/7364a087-f10f-45ed-af28-fe4467d396e3.png?x-oss-process=style/original_hs",
        "showcaseTag": "News",
        "showcaseTagUrl": "http://www.g-cores.com/categories/2",
        "showcaseTitle": "PS4版《小魔女学园 时空魔法与七大不可思议》繁中版12月21日发售",
        "showcaseTitleUrl": "http://www.g-cores.com/articles/26946",
        "showcaseInfo": "可以说是很棒棒了。"
    }, {
        "showcaseTime": "2017-09-01",
        "showcaseImg": "http://image.g-cores.com/f57d1439-bad1-4770-ae0a-79b65660cf43.jpg?x-oss-process=style/original_hs",
        "showcaseTag": "News",
        "showcaseTagUrl": "http://www.g-cores.com/categories/2",
        "showcaseTitle": "CEDEC AWARDS 2017塞尔达“一箭双雕”，坂口博信获特别奖",
        "showcaseTitleUrl": "http://www.g-cores.com/articles/26950",
        "showcaseInfo": "只有来自同行的肯定，才是赤裸裸……呃，赞美"
    }, {
        "showcaseTime": "2017-09-01",
        "showcaseImg": "http://image.g-cores.com/7364a087-f10f-45ed-af28-fe4467d396e3.png?x-oss-process=style/original_hs",
        "showcaseTag": "News",
        "showcaseTagUrl": "http://www.g-cores.com/categories/2",
        "showcaseTitle": "PS4版《小魔女学园 时空魔法与七大不可思议》繁中版12月21日发售",
        "showcaseTitleUrl": "http://www.g-cores.com/articles/26946",
        "showcaseInfo": "可以说是很棒棒了。"
    }, {
        "showcaseTime": "2017-09-01",
        "showcaseImg": "http://image.g-cores.com/f57d1439-bad1-4770-ae0a-79b65660cf43.jpg?x-oss-process=style/original_hs",
        "showcaseTag": "News",
        "showcaseTagUrl": "http://www.g-cores.com/categories/2",
        "showcaseTitle": "CEDEC AWARDS 2017塞尔达“一箭双雕”，坂口博信获特别奖",
        "showcaseTitleUrl": "http://www.g-cores.com/articles/26950",
        "showcaseInfo": "只有来自同行的肯定，才是赤裸裸……呃，赞美"
    }, {
        "showcaseTime": "2017-09-01",
        "showcaseImg": "http://image.g-cores.com/7364a087-f10f-45ed-af28-fe4467d396e3.png?x-oss-process=style/original_hs",
        "showcaseTag": "News",
        "showcaseTagUrl": "http://www.g-cores.com/categories/2",
        "showcaseTitle": "PS4版《小魔女学园 时空魔法与七大不可思议》繁中版12月21日发售",
        "showcaseTitleUrl": "http://www.g-cores.com/articles/26946",
        "showcaseInfo": "可以说是很棒棒了。"
    }]
};


router.get('/', function (req, res, next) {
    // 使用模拟数据
    res.render('index', indexData);
    //  --------- 调用本地服务获取
    //
    // // request(config.javaServer + '/search', (error, response, body) => {
    // //     // console.log('error:', error); // 返回错误信息
    // //     // console.log('statusCode:', response && response.statusCode); // 返回请求的状态码
    // //     // console.log('body:', body); // 返回回来的数据
    // //     res.send(body);
    // // })
    //
    // let url = config.javaServer + '/showcase/search?tags=News'
    // // if (req.params != null) {
    // //     url += "?"
    // //     Object.keys(req.params).forEach(key, index => {
    // //         if (index != 0) {
    // //             url += '&' + key + '=' + req.params[key]
    // //         }
    // //     })
    // // }
    // console.log(url)
    // fetch(url, { // URL如不写http等，则会使用host自动补全
    //         method: 'GET',
    //         headers: {
    //             'Accept': 'application/json',
    //             'Content-Type': 'application/json'
    //         }
    //     })
    //     .then((resf) => {
    //         return resf.json()
    //     })
    //     .then((resf) => {
    //         console.log(resf) // 获取JSON数据
    //         res.render('index', {
    //             title: config.title,
    //             carouselList: config.carouselList,
    //             showcaseList: resf
    //         });
    //     })
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