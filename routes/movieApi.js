var express = require('express');
var router = express.Router();
var fs = require('fs');
var Movies = require('../movie');
router.get('/getMovie',function(req,res){
  Movies.find(function(err,movie){
    console.log("reponse is...." + movie);
        res.json(movie);
  })
})

router.post('/addMovie', function(req, res) {
 console.log("body" + req.body.time);
 var name= req.body.name;
 var theater=req.body.theater;
 var price=parseInt(req.body.price);
var time=(req.body.time).split(",");
var screen =parseInt(req.body.screen);
var data=req.body.imgPath;
var imgName=req.body.name;

console.log("every thing is done.......")

 var newMovie = new Movies({
        name:name,
         img:data,
        movieTheater:[{
            theater:theater,
            time:time,
            screen:screen,
            price: price
        }],
       
    
     })

     console.log("every thing is done  2222......." )
    Movies.addMovie(newMovie,function(err,user){
         if(err){console.log("error occured")}
       console.log(user);
       res.json(user);
     })

     });

     router.get("/theater",function(req,res){
           var name="Tintin";
           var theater="inox";
           Movies.MovieGet(name,theater,function(err,user){
             if(err){console.log("error occured")}
       console.log(user);
       res.json(user);
           })
     })

     module.exports = router;