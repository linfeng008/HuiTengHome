var AboutUsM = require('../models/aboutUsM');
var joinUsM = require('../models/joinUsM');
var ExampleM = require('../models/exampleM');

exports.index= function(req, res) {
    ExampleM.find(function (err, result) {
        if (err) {
            console.log(err);
        }
        res.render('pcWEB/index', {
            title: '首页',
            postData: result
        });
    });
};
exports.product= function(req, res) {
    res.render('pcWEB/product', {
        title: '产品'
    });
};
exports.joinUs=function(req, res) {
    joinUsM.find(function (err, joinUs) {
        if (err) {
            console.log(err);
        }
        res.render('pcWEB/joinUs', {
            title: '加入我们',
            postDate: joinUs
        });
    });
};
exports.aboutUs= function(req, res) {
    AboutUsM.find(function(err,aboutUs){
        if(err){
            console.log(err);
        }
        res.render('pcWEB/aboutUs', {
            title: '关于我们',
            postData:aboutUs[0]
        });
    });
};
exports.example= function(req, res) {
    ExampleM.find(function(err,result){
        if(err){
            console.log(err);
        }
        res.render('pcWEB/example', {
            title: '用户成功故事',
            postData:result
        });
    });
};
