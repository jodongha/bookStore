var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
// var indexRouter = require('./src/routes/index');
// var usersRouter = require('./src/routes/users');

var signRouter = require('./src/routes/signRouter');
var bookRouter = require('./src/routes/bookRouter');
var mypageRouter = require('./src/routes/mypageRouter');
var orderRouter = require('./src/routes/orderRouter');
var cartRouter = require('./src/routes/cartRouter');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  secret:'keyboard cat',
  resave:false,
  saveUninitialized:true,
  store: new FileStore()
}))
// app.use('/', indexRouter);
// app.use('/users', usersRouter);
app.use('/', signRouter);
app.use('/', bookRouter);
app.use('/', mypageRouter);
app.use('/', orderRouter);
app.use('/', cartRouter);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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
