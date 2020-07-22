const fs = require('fs');
const path = require('path');
const config = require('../data/config.js');

const showcase = function showcase(
    title = "CEDEC AWARDS 2017塞尔达“一箭双雕”，坂口博信获特别奖",
    url = "http://www.g-cores.com/articles/26950",
    info = "只有来自同行的肯定，才是赤裸裸……呃，赞美",
    tag = "News",
    // url = "http://www.g-cores.com/categories/2",
    imgUrl = "http://image.g-cores.com/f57d1439-bad1-4770-ae0a-79b65660cf43.jpg?x-oss-process=style/original_hs",
    createTime = 111111) {
    return {
        title,
        url,
        info,
        tag,
        url,
        imgUrl,
        createTime
    }
};

let showcaseList = null;
showcase.getAllCases = function () {
    if (showcaseList == null) {
        showcaseList = JSON.parse(fs.readFileSync(path.resolve("./data/showcase.json"), 'utf8'));
        console.log('showcaseList from file [%s]', JSON.stringify(showcaseList));
    } else {
        console.log('showcaseList from cache');
    }
    return showcaseList
};

showcase.filter = function (tag) {
    return showcase.getAllCases().filter(function (item) {
        return item.tag.split(",").indexOf(tag) >= 0
    });
};


module.exports = showcase;