var mongo = require('mongodb');
var mongoose = require('mongoose');
var bcrypt = require('bcrypt')
mongoose.connect('mongodb://localhost:27017/fullstack');
var db = mongoose.connection;


var userSchema=mongoose.Schema({
    title:{
        type : String,
        index:true
    },
    author:{
        type:String
    },
    genre: {
        type:String
    },
    price:{
        type: Number
     }
    // store:[{
    //      name:String,
    //      time:[],
    //      screen:Number
    // }]
    
});

var Books = module.exports =mongoose.model('books',userSchema);
module.exports.addBook = (newBook,callback)=>{
newBook.save(callback);}



