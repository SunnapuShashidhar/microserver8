var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var DB_URL = require('./properties').DB_URL;
var mongoose = require("mongoose");
const cors = require('cors');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var restaurantRouter = require('./routes/restaurants');
var citylistRouter = require('./routes/citylist');
var mealsRouter = require('./routes/meals');
var SignRoute = require("./routes/signUp");
var recommendations = require("./controller/recommendControl")
var AboutController = require("./controller/AboutController")
var cantactControl = require("./controller/contactControl")

mongoose.connect(DB_URL);
var app = express();

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');
app.use(cors({
  origin: "https://shashidharsunnapu.netlify.app",
  optionSuccessStatus: 200
}));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/restarent', restaurantRouter);
app.use('/citylist', citylistRouter);
app.use('/meals', mealsRouter);
app.use("/newuser", SignRoute);
app.use("/newrecommend", recommendations);
app.use("/about", AboutController);
app.use("/contact", cantactControl);
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
