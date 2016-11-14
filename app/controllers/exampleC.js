var ExampleM = require('../models/exampleM');
var UloadC = require('./uploadC');
var _ = require('underscore');

exports.get = function (req, res) {
    //分页功能
    ExampleM.find(function (err, result) {
        if (err) {
            console.log(err);
        }
        res.render('admin/exampleList', {
            title: '客户案例',
            postData: result,
            admin:req.session.admin
        });
    });
};

exports.add = function (req, res) {
    res.render('admin/exampleAdd', {
        title: '添加案例',
        admin:req.session.admin
    });
};

exports.examplePost = function (req, res) {
    var _example = req.body;
    var BrandLogo='';
    UloadC.imgUpload(req.files.BrandLogo, function(result){
        BrandLogo =result;
        //这里可以写成异步的，，，
        _example.BrandLogo = BrandLogo;
        var id = _example.id;
        var exampleObj = '';
        ExampleM.findById(id, function (err, example) {
            if (err) {
                console.log(err);
            }
            if (example) {
                exampleObj = _.extend(example, _example);
                exampleObj.save(function (err, example) {
                    if (err) {
                        console.log(err);
                    }
                    res.send({status: true, info: '更新成功！'});
                });
            } else {
                example = new ExampleM(_example);
                example.save(function (err, example) {
                    if (err) {
                        console.log(err);
                    }
                    res.send({status: true, info: '提交成功!'});
                });
            }
        });
    });
};

exports.del = function (req, res) {
    //删除的时候，没有删除本地的图片后续需要完善
    var id = req.body.id;
    ExampleM.remove({"_id": id}, function (err, example) {
        if (err) {
            console.log(err);
        }
        res.send({status: true, info: '删除成功！'});
    });
};

exports.edit = function (req, res) {
    var id = req.params.id;
    ExampleM.findById(id, function (err, result) {
        if (err) {
            console.log(err);
        }
        res.render('admin/exampleEdit', {
            title: '加入我们-修改',
            postData: result,
            admin:req.session.admin
        });
    });
};