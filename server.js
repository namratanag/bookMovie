var express = require('express');
var bodyparser = require('body-parser');
var path=require('path');
var port =4200;
var port1 =3000;
var http =require('http');
var passport =require('passport');
var passport_local = require('passport-local').Strategy;
var passport_http = require('passport-http');
var mongo = require('mongodb');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/fullstack');
var db = mongoose.connection;
var expressValidator = require('express-validator');




var app=express();
// all api for server and client side connection
var admin=require('./routes/adminApi');
var api=require('./routes/api');
var data=require('./routes/data');
var movieApi=require('./routes/movieApi');

//passport iniitilization
app.use(passport.initialize());
app.use(passport.session());
app.use(expressValidator());
//use bodyparser

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname,'build')));
app.use('/admin',admin);

app.use('/movieApi',movieApi);
app.use('/data',data);
app.use('/api',api);

app.get('*',function(err,res){
    res.sendFile(path.join(__dirname,'build/index.html'));

});
app.set('port',port);
app.listen(port,function(err,res){
    console.log("running at port"+ port);
});
