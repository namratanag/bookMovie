var mongo = require('mongodb');
var mongoose = require('mongoose');
var fs = require('fs');
// var bcrypt = require('bcrypt')
mongoose.connect('mongodb://localhost:27017/fullstack');
var db = mongoose.connection;
// const myPlaintextPassword = 's0/\/\P4$$w0rD';
var imgPath = 'View_Book.png';
var image=mongoose.Schema({
    img: { data: Buffer, contentType: String }
    
});

var Image= module.exports =mongoose.model('image',image);

var a = new Image;
    a.img.data = fs.readFileSync(imgPath);
    a.img.contentType = 'image/png';
    a.save(function (err, a) {
      if (err) throw err;

    console.error('saved img to mongo');});
// module.exports.createuser = (newUser,callback)=>{
//     bcrypt.genSalt(10,function(err,salt){
//         bcrypt.hash(newUser.password, salt,function(err,hash){
//                    newUser.password = hash;
//                    newUser.save(callback);
//         });
// });
// }
// module.exports.getUserByUsername = function(username,callback){
//     var query = {username:username};
//     User.findOne(query,callback);
// }

// module.exports.comparePassword = function(candidatePassword , hash ,callback){
//    bcrypt.compare(candidatePassword, hash, function(err, isMatch) {
//    if(err){console.log("error in password matching")};
//      callback(null,isMatch);
// });
// }
// //////////////////////////////////////////////////////////////////////////////////////
// // module.exports.compareRole = function(role,callback){
// //     var query = {username:username};
// //     User.findOne(query,callback);
// // }
// ////////////////////////////////////////////////////////////////////////////////////////
// module.exports.getUserById = function(id,callback){
//     User.findById(id,callback);
// }

