var Admin = require('../models/adminM');
var hashC = require('./hashC');

exports.login = function (req, res) {
    res.render('admin/login', {
        title: '登录',
        admin: ''
    });
};

exports.logout = function (req, res) {
    delete req.session.admin;
    res.redirect('/admin/login');
};

//登录
exports.singin = function (req, res) {
    var _admin = req.body;
    console.log(_admin);
    Admin.findOne({adminName: _admin.adminName}, function (err, admin) {
        if (err) {
            console.log(err);
        }
        if(admin){
            hashC.encryption(_admin.PassWord, function (result) {
                if (admin.PassWord == result) {
                    req.session.admin = req.body;
                    res.send({status: true, info: '登录成功！'});
                } else {
                    res.send({status: false, info: '密码错误,请重试！'});
                }
            });
        }else{
            res.send({status: false, info: '用户名不正确！请重试'});
        }
    });
};

exports.register = function (req, res) {
    res.render('admin/register', {
        title: '注册',
        admin: ''
    });
};

exports.registerAdd = function (req, res) {
    var _admin = req.body;
    hashC.encryption(_admin.PassWord, function (result) {
        _admin.PassWord = result;
        Admin.findOne({adminName: _admin.adminName}, function (err, admin) {
            if (err) {
                console.log(err);
            }
            if (admin) {
                return res.send({status: false, info: '用户已经存在'});
            } else {
                admin = new Admin(_admin);
                admin.save(function (err, admin) {
                    if (err) {
                        console.log(err);
                    }
                    res.send({status: true, info: '成功了'});
                });
            }
        });
    });
};

exports.home = function (req, res) {
    res.render('admin/home', {
        title: "home",
        admin: req.session.admin
    });
};
