/**
 * Created by zaze on 2019/6/26.
 */
const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');


router.get('/download/apk', function (req, res, next) {
    res.json({
        url:"http://172.22.0.108:3000/debug/download/app/app-debug.apk",
        checksum:"2791feb0b31c8aab72e93e5eb8bd4ba"
    })
});

router.get('/download/app/*', function (req, res, next) {
    var name = req.params[0];
    var filePath = path.resolve("./../download/apk") + "/" + name;
    console.log('下载请求 ' + filePath);
    var responseBody = {};
    if (fs.existsSync(filePath)) {
        var size = fs.statSync(filePath).size;
        var f = fs.createReadStream(filePath);
        res.writeHead(200, {
            'Content-Type': 'application/force-download',
            'Content-Disposition': 'attachment; filename=' + name,
            'Content-Length': size
        });
        f.pipe(res);
        console.log('下载完成 ' + filePath);
    } else {
        responseBody = JSON.stringify({
            returnMsg: '400'
        });
        console.log('文件未找到 ' + filePath);
    }
});

module.exports = router;
