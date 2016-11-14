var express = require('express');
var path = require('path');
var mongoose = require('mongoose');
var mongoStore = require('connect-mongo')(express);
var port = process.env.PORT || 3000;
var app = express();
var routes = require('./app/routes/index');
var dbUrl = 'mongodb://127.0.0.1:27017/huiTenWEB';
mongoose.connect(dbUrl);

app.set('views', './app/views/');
app.set('view engine', 'ejs');
app.use(express.bodyParser({ //上传文件
    keepExtensions: true,
    uploadDir: 'public/upload'
}));
app.use(express.cookieParser());
app.use(express.multipart());
app.use(express.session({
    secret: 'imooc',
    store: new mongoStore({
        url: dbUrl,
        collection: 'sessions'
    })
}));

if ('development' === app.get('env')) {
    app.set('showStackError', true);
    app.use(express.logger(':method :url :status'));
    app.locals.pretty = true;
    mongoose.set('debug', true)
}
routes(app);
app.listen(port);
app.use(express.static(path.join(__dirname, 'public')));

console.log('imooc started on port ' + port);