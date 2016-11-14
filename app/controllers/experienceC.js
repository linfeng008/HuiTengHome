var ExperienceM = require('../models/experienceM');

exports.get = function(req,res){
    ExperienceM.find(function(err,result){
        if(err){
            console.log(err);
        }
        res.render('admin/experienceList',{
            title:'用户体验申请',
            postData:result,
            admin:req.session.admin
        })
    });
};

exports.getDetail = function(req,res){
    var id=req.params.id;
    ExperienceM.findById(id,function(err,result){
        if(err){
            console.log(err);
        }
        res.render('admin/experienceDetail',{
            title:'用户体验申请详细',
            postData:result,
            admin:req.session.admin
        })
    });
};

exports.save = function(req,res){
    var _experience = req.body;
    ExperienceM.findOne({phone:_experience.phone},function(err,result){
       if(err){
           console.log(err);
       }
       if(result){
           res.send({'status':false,'info':'您已经申请试用，我们会尽快与您联系！'});
       }else{
           result = new ExperienceM(_experience);
           result.save(function(err,result){
               if(err){
                   console.log(err);
               }
               res.send({'status':true,'info':'提交成功，我们会尽快与你取得联系！'});
           });
       }
    });
};

exports.remove = function(req,res){
    var id = req.body.id;
    ExperienceM.remove({'_id':id},function(err,result){
       if(err){
           console.log(err);
       }
        res.send({status: true, info: '删除成功！'});
    });
};