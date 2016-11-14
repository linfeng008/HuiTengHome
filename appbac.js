/**
 * Module dependencies.
 */

var express = require('express')
    , routes = require('./app/routes')
    , http = require('http')
    , path = require('path');

var _=require('underscore');
//27-19 50 9月
var mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/huiTenWEB');
/*
mongoose.connect('mongodb://127.0.0.1:27017/huiTenWEB',{
    user:'huiteng',
    pass:'huiteng'
});
*/

var app = express();

app.configure(function () {
    app.set('port', process.env.PORT || 80);
    app.set('views', __dirname + '/app/views');
    app.set('view engine', 'ejs');
    app.use(express.favicon(__dirname +'/public/images/logo.ico'));
    app.use(express.logger('dev'));

    app.use(express.bodyParser({ //上传文件
        keepExtensions: true,
        uploadDir: 'public/upload'
    }));

    app.use(express.methodOverride());

    app.use(express.cookieParser());
    app.use(express.session({
        secret: 'mywebsit',
        cookie: {
            maxAge: 1000 * 60 * 60
        }
    }));

    app.use(app.router);
    app.use(express.static(path.join(__dirname, 'public')));

});

app.configure('development', function () {
    app.use(express.errorHandler());
});

http.createServer(app).listen(app.get('port'), function () {
    console.log("Express server listening on port " + app.get('port'));
});

routes(app);
