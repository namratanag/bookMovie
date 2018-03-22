var mongo = require('mongodb');
var mongoose = require('mongoose');
var bcrypt = require('bcrypt')
//mongoose.connect('mongodb://localhost:27017/fullstack');
var db = mongoose.connection;
const myPlaintextPassword = 's0/\/\P4$$w0rD';

var userSchema=mongoose.Schema({
    username:{
        type : String,
        index:true
    },
    password:{
        type:String
    },
    email : {
        type:String},
    name:{
        type: String
    },
    role:{
        type: String
           
    }
    
});

var User = module.exports =mongoose.model('User',userSchema);
module.exports.createuser = (newUser,callback)=>{
    bcrypt.genSalt(10,function(err,salt){
        bcrypt.hash(newUser.password, salt,function(err,hash){
                   newUser.password = hash;
                   newUser.save(callback);
        });
});
}
module.exports.getUserByUsername = function(username,callback){
    var query = {username:username};
    User.findOne(query,callback);
}

module.exports.comparePassword = function(candidatePassword , hash ,callback){
   bcrypt.compare(candidatePassword, hash, function(err, isMatch) {
   if(err){console.log("error in password matching")};
     callback(null,isMatch);
});
}
////////////////////////////////////////////////////////////////////////////////////
module.exports.compareRole = function(role,callback){
    var query = {username:username};
    User.findOne(query,callback);
}
////////////////////////////////////////////////////////////////////////////////////////
module.exports.getUserById = function(id,callback){
    User.findById(id,callback);
}

