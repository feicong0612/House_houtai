let express = require('express');
let path = require('path');
//let favicon = require('serve-favicon');
let logger = require('morgan');
let cookieParser = require('cookie-parser');
let bodyParser = require('body-parser');
//用户模块路由
let userQuery = require('./routes/userQuery');
let userInsert = require('./routes/userInsert');
let userDelete = require('./routes/userDelete');
let userUpdate = require('./routes/userUpdate');
//房子模块路由
let houseQuery = require('./routes/houseQuery');
let houseInsert = require('./routes/houseInsert');
let houseDelete = require('./routes/houseDelete');
let houseUpdate = require('./routes/houseUpdate');
//未使用
let update = require('./routes/update');
let deleteData = require('./routes/delete');

let app = express();

//设置跨域访问
app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type, X-Requested-With");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By", ' 3.2.1');
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//用户模块路由
app.use('/userQuery', userQuery);
app.use('/userInsert', userInsert);
app.use('/userDelete', userDelete);
app.use('/userUpdate', userUpdate);
//房子模块路由
app.use('/houseQuery', houseQuery);
app.use('/houseInsert', houseInsert);
app.use('/houseDelete', houseDelete);
app.use('/houseUpdate', houseUpdate);
//未使用
app.use('/update', update);
app.use('/delete', deleteData);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
module.exports = app;
