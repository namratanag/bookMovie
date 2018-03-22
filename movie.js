var mongo = require('mongodb');
var mongoose = require('mongoose');
var bcrypt = require('bcrypt')
mongoose.connect('mongodb://localhost:27017/fullstack');
var db = mongoose.connection;


var userSchema=mongoose.Schema({
    name:{
        type : String,
        index:true
    },
     img: {
        type: String
    },
   
    movieTheater:[{
         theater:String,
         time:[],
         screen:Number,
          price:{
        type: Number
    }
    }],
   
    
});

var Movies= module.exports =mongoose.model('movies',userSchema);
module.exports.addMovie = (newMovie,callback)=>{
newMovie.save(callback);}

module.exports.MovieGet = function(name,theater,callback){
    var query = {name:name,$eleMatch:{theater:theater}};
    newMovie.findOne(query,callback);
}



