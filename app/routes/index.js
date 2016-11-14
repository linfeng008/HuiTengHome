var indexC = require('../controllers/indexC');
var adminC = require('../controllers/adminC');
var joinUsC = require('../controllers/joinUsC');
var aboutUsC = require('../controllers/aboutC');
var exampleC = require('../controllers/exampleC');
var experienceC = require('../controllers/experienceC');
var uploadC = require('../controllers/uploadC');
var activityC = require('../controllers/activityC');
var mp = require('../controllers/mp.js');

module.exports = function(app) {
        app.use(function(req,res,next){
            var _user = req.session.user;
            if(_user){
                app.locals.user = _user;
            }
            return next();
        });
        /*---------------------------pc端-----------------------------*/
        app.get('/', indexC.index);
        app.get('/product', indexC.product);
        app.get('/joinUs', indexC.joinUs);
        app.get('/aboutUs', indexC.aboutUs);
        app.get('/example', indexC.example);

        /*------------------------------moblie--------------------------------------------------*/
        app.get('/mobile/product', function(req, res) {
            res.render('mobile/product', {
                title: '老板大管家，微信上的企业管理专家'
            });
        });

        //微信接入
        app.get('/weixin/authenticate', mp.authenticate);
        app.get('/weixin/userInfo', mp.getuserInfo);

        //招聘活动
        app.get('/mobile/activitySign', activityC.activityGet);
        app.post('/mobile/activityPost', activityC.activityPost);
        app.get('/mobile/activitySuccess', activityC.activitySuccess);

        /*-------------------------------------------------admin--------------------------------*/
        //登录
        app.get('/admin/login', checkNotLogin);
        app.get('/admin/login', adminC.login);
        app.post('/admin/login', adminC.singin);
        //登出
        app.get('/admin/logout', checkLogin);
        app.get('/admin/logout', adminC.logout);
        //注册
        app.get('/admin/register', adminC.register);
        app.post('/admin/register', adminC.registerAdd);
        //home
        app.get('/admin/home', checkLogin);
        app.get('/admin/home', adminC.home);
        //加入我们
        app.get('/admin/joinUsAdd', checkLogin);
        app.get('/admin/joinUsAdd', joinUsC.joinUs);
        app.get('/admin/joinUsList', joinUsC.joinUsList);
        app.get('/admin/joinUsEdit/:id', joinUsC.joinUsEdit);
        app.post('/admin/joinUsDel', joinUsC.joinUsDel);
        app.post('/admin/joinUsAdd', joinUsC.joinUsSave);
        //关于我们
        app.get('/admin/aboutUs', checkLogin);
        app.get('/admin/aboutUs', aboutUsC.aboutUs);
        app.post('/admin/aboutUs', aboutUsC.aboutUsPost);

        //客户案例
        app.get('/admin/exampleAdd', checkLogin);
        app.get('/admin/exampleAdd', exampleC.add);
        app.post('/admin/exampleAdd', exampleC.examplePost);
        app.get('/admin/exampleList', exampleC.get);
        app.get('/admin/exampleEdit/:id', exampleC.edit);
        app.post('/admin/exampleDel', exampleC.del);

        //客户体验申请
        app.get('/admin/experience', checkLogin);
        app.get('/admin/experience', experienceC.get);
        app.get('/admin/experienceDetail/:id', experienceC.getDetail);
        app.post('/admin/experience', experienceC.save);
        app.post('/admin/experienceDel', experienceC.remove);

        //活动

     //   app.get('/admin/activity', checkLogin);
        app.get('/admin/activityList/:page', activityC.activityList);
        app.post('/admin/activityConfirm', activityC.activityConfirm);
        app.post('/admin/activityDel', activityC.activityDel);

        //上传demo
        app.get('/admin/upload', uploadC.upload);
        app.post('/admin/upload', uploadC.saveUp);
        app.post('/admin/upload2', uploadC.saveUp2);
        app.all('/admin/upload3', uploadC.saveUp3);
        app.all('/admin/upload4', uploadC.saveUp4);
    }
//checkNotLogin和checkLogin用来检测是否登录,并通过next()转移控制权,检查到未登录则跳转到登录页检测到已登录则跳转到前一页，
function checkLogin(req, res, next) {
    if (!req.session.admin) {
        res.send({
            status: false,
            info: '没有登录'
        });
        return res.redirect('/admin/login');
    }
    next();
}

function checkNotLogin(req, res, next) {
    if (req.session.admin) {
        return res.redirect('back'); //返回之前的页面
    }
    next(); //转移控制权
}