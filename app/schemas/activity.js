var mongoose = require('mongoose');

var ActivitySchema = new mongoose.Schema({
    aId:Number,
    name: String,
    tel: String,
    headImgUrl: String,
    openid: String,
    address: String,
    Startime:String,
    meta: {
        createAt: {
            type: Date,
            default: Date.now()
        }
    }
});

ActivitySchema.pre('save', function (next) {
    this.meta.createAt = Date.now();
    next();
});
ActivitySchema.statics = {
    fetch: function (start,pageSize,cb) {
        return this
            .find({})
            .skip(start)
            .limit(pageSize)
            .exec(cb)
    },
    findByOpenId:function(openid,cb){
        return this
            .findOne({
                'openid':openid
            })
            .exec(cb)
    },
    findOneobj:function(obj,cb){
        return this
            .findOne(obj)
            .exec(cb);
    },
    findByTel:function(tel,cb){
        return this
            .findOne({
                'tel':tel
            })
            .exec(cb)
    }
}
module.exports = ActivitySchema;