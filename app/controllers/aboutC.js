var AboutUsM = require('../models/aboutUsM');
var _ = require('underscore');

exports.aboutUs = function (req, res) {
    AboutUsM.find(function(err,aboutUs){
        if(err){
            console.log(err);
        }
        if(aboutUs){
            res.render('admin/aboutUs', {
                title: '关于我们',
                postData:aboutUs[0],
                admin:req.session.admin
            });
        }else{
            res.render('admin/aboutUs', {
                title: '关于我们',
                postData:[],
                admin:req.session.admin
            });
        }
    });
};
exports.aboutUsPost = function (req, res) {
    var _aboutUs = req.body;
    var AboutObj='';
    var id='5572ab8f378ecce40d6fc347';

    AboutUsM.findById(id,function(err,aboutUs){
        if (err) {
            console.log(err);
        }
        if(aboutUs){
            AboutObj = _.extend(aboutUs,_aboutUs);
            AboutObj.save(function (err, aboutUs) {
                if (err) {
                    console.log(err);
                }
                res.send({status: true, info: '成功了'});
            });
        }else{
            aboutUs = new AboutUsM(_aboutUs);
            aboutUs.save(function (err, aboutUs) {
                if (err) {
                    console.log(err);
                }
                res.send({status: true, info: '成功了'});
            });
        }
    });
}