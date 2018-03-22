var express = require('express');
var router = express.Router();
var Books = require('../books');
router.get('/getBook',function(req,res){
  Books.find(function(err,books){
    //console.log("reponse is...." + books);
        res.json(books);
  })
})

router.post('/addBook', function(req, res) {
console.log("body" + req.body);
var title = req.body.title
     var author = req.body.author;
     var genre = req.body.genre;
     var price= req.body.price;
     
  

     console.log( req.body.title +" "+
      req.body.author + "  "
     + req.body.genre + " "
     + req.body.price + " "
)



 var newBook = new Books({
        title:title,
        author:author,
        genre:genre,
        price: price,

     })
     Books.addBook(newBook,function(err,user){
         if(err){console.log("error occured")}
       console.log(user);
       res.json(user);
     })

     });

     module.exports = router;