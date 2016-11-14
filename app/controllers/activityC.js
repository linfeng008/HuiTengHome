var ActivityM = require('../models/activityM');
var MP = require('./mp');

exports.activityGet = function (req, res) {
    /* ActivityM.find().exec(function(err,result){
     if(result.length>29){
        res.write('报名已满！')
     }else{

     }
     });*/

    res.render('mobile/activitySign', {
        title: '英雄相聚，免费领酒'
    });

    /*
     ActivityM.findByOpenId(req.session.user.openid,function(err,result){
     if(err){
        console.log(err);
     }
     if(result){
        res.redirect('/mobile/activitySuccess');
     }else{
     }
     });
     */
};

exports.activityPost = function (req, res) {
    /* //微信认证时要用到客户资料
     var cookUser = req.session.user;
     var _activity = {
     name:req.body.name,
     tel:req.body.tel,
     Startime:req.body.Startime,
     headImgUrl:cookUser.headimgurl,
     openid:cookUser.openid,
     address:cookUser.country + cookUser.province + cookUser.city
     };
     */
    var _activity = req.body;
    req.session.tel = req.body.tel;
    ActivityM.findByTel(req.body.tel, function (err, activity) {
        if (err) {
            console.log(err);
        }
        if (activity) {
            res.send({status: false, info: '亲，你已经提交过了哦！'});
        } else {
            var activity = new ActivityM(_activity);
            activity.save(function (err, activity) {
                if (err) {
                    console.log(err);
                }
                res.send({status: true, info: '亲，提交成功了'})
            })
        }
    })
};

exports.activitySuccess = function (req, res) {
    if (req.session.tel) {
        ActivityM.findByTel(req.session.tel, function (err, restels) {
            if (err) {
                console.log(err);
            }
            //sort  排序
            //limit 条数
            //skip  开始数

            ActivityM.find().sort({_id: -1}).limit(30).skip(0).exec(function (err, result) {
                if (err) {
                    console.log(err);
                }
                res.render('mobile/activitySuccess', {
                    title: '我真的领到了128元的进口红酒!',
                    resss: restels,
                    postData: result
                });
            });

        });
    } else {
        res.redirect('/mobile/activitySign');
    }
};

exports.activityList = function (req, res) {
    ActivityM.find().count(function (err, count) {
        var step = 2;
        var page = req.params.page;
        var pages = count / step;
        if (page > pages) {
            res.send({status:false,info: '没有数据了'});
        } else {
            //count 获取条数
            //sort  排序
            //limit 条数
            //skip  开始页数
            ActivityM.find().sort({_id: -1}).limit(step).skip(page).exec(function (err, result) {
                if (err) {
                    console.log(err);
                }
                res.render('admin/activityList', {
                    'title': '活动管理',
                    'admin': '',
                    'postPage':page,
                    'postPages':pages,
                    'postData': result
                });
            });
        }
    });
};

exports.activityConfirm = function (req, res) {
    console.log('bb');
};

exports.activityDel = function (req, res) {
    console.log('cc');
};