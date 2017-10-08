var express = require('express');
var router = express.Router();


var indexData = {
    title: "Express",
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
    res.render('index', indexData);
});

router.get('/android', function (req, res) {
    res.render('android.ejs', {"appList":indexData.showcaseList})
    // res.render('android.ejs', indexData.showcaseList);
});

router.get('/html5', function (req, res) {
    res.render('html5.ejs', {title: 'HTML5-'})
});

var data = {list: [{"name": "张三", "age": 20}, {"name": "李四", "age": 21}]};
router.get('/game', function (req, res) {
    res.render('game.ejs', data);
});


module.exports = router;
