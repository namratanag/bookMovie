var mongo = require('mongodb');
var mongoose = require('mongoose');
var bcrypt = require('bcrypt')
//mongoose.connect('mongodb://localhost:27017/fullstack');
var db = mongoose.connection;
const myPlaintextPassword = 's0/\/\P4$$w0rD';

var AdminSchema=mongoose.Schema({
    Adminname:{
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
    }
    
});

var Admin = module.exports =mongoose.model('Admin',AdminSchema);
module.exports.createAdmin = (newAdmin,callback)=>{
    bcrypt.genSalt(10,function(err,salt){
        bcrypt.hash(newAdmin.password, salt,function(err,hash){
                   newAdmin.password = hash;
                   newAdmin.save(callback);
        });
});
}
module.exports.getAdminByAdminname = function(Adminname,callback){
    var query = {Adminname:Adminname};
    Admin.findOne(query,callback);
}

module.exports.comparePassword = function(candidatePassword , hash ,callback){
   bcrypt.compare(candidatePassword, hash, function(err, isMatch) {
   if(err){console.log("error in password matching")};
     callback(null,isMatch);
});
}
module.exports.getAdminById = function(id,callback){
    Admin.findById(id,callback);
}

