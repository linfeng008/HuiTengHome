var oAuth = require('wechat-oauth');
var config = require('../../config');

var client = new oAuth(config.appid, config.appsecret);

exports.authenticate = function (req, res) {
    var redirect = 'http://ssymtdh.eicp.net/weixin/userInfo';
    var authorizeURL = client.getAuthorizeURL(redirect,'state','snsapi_base');
    res.redirect(authorizeURL);
};

exports.getuserInfo = function (req, res) {
    var accessToken ='';
    var openid ='';
    client.getAccessToken(req.query.code, function (err, result) {
        accessToken = result.data.access_token;
        openid = result.data.openid;
        client.getUser(openid,function(err,result){
            if(err){
                console.log(err);
            }
            req.session.user = result;
            res.redirect('/mobile/activitySign');
        });
    });
};
