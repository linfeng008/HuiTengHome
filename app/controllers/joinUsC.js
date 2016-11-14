var joinUsM = require('../models/joinUsM');
var _ = require('underscore');

exports.joinUs = function (req, res) {
    res.render('admin/joinUsAdd', {
        title: '加入我们',
        admin:req.session.admin
    });
};

exports.joinUsList = function (req, res) {
    joinUsM.find(function (err, joinUs) {
        if (err) {
            console.log(err);
        }
        res.render('admin/joinUsList', {
            title: '加入我们',
            postDate: joinUs,
            admin:req.session.admin
        });
    });
};

exports.joinUsSave = function (req, res) {
    var _joinUs = req.body;
    var id = req.params.id;
    var joinUsObj = '';
    joinUsM.findById(id, function (err, joinUs) {
        if (err) {
            console.log(err);
        }
        if (joinUs) {
            joinUsObj = _.extend(joinUs, _joinUs);
            joinUsObj.save(function (err, joinUs) {
                if (err) {
                    console.log(err);
                }
                res.send({status: false, info: '这个职位已经发布,请换一个重新提交'});
            });
        } else {
            joinUs = new joinUsM(_joinUs);
            joinUs.save(function (err, joinus) {
                if (err) {
                    console.log(err);
                }
                res.send({status: true, info: '提交成功!'});
            })
        }
    });
};

exports.joinUsEdit = function (req, res) {
    var id = req.params.id;
    joinUsM.findById(id, function (err, result) {
        if (err) {
            console.log(err);
        }
        console.log(result);
        res.render('admin/joinUsEdit', {
            title: '加入我们-修改',
            postData: result,
            admin:req.session.admin
        });
    });
};

exports.joinUsDel = function (req, res) {
    var id = req.body.id;
    joinUsM.remove({"_id":id}, function (err, joinUs) {
        if (err) {
            console.log(err);
        }
        res.send({status: true, info: '删除成功！'});
    });
};
