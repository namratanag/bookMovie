var express = require('express');
var router = express.Router();
 var User = require('../user');
// var Admin = require('../admin');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

router.post('/posts', function(req, res) {
    console.log(req.body);
    res.json(req.body);
});
passport.use(new LocalStrategy( 
    function(username, password,done) {
      console.log("inside user directory")
       User.getUserByUsername(username,function(err,user){
             if(err){console.log("error"); }
             if(!user){ return done(null,false,{message : 'Unknown user'});}
             User.comparePassword(password,user.password,(err,isMatch)=>{
                   if(err){console.log("error");}
                   if(isMatch){ console.log("such user is there!!!");
                      return done(null,user);} 
                   else {return done(null,false,{message : 'INVALID PASSWORD'})}

             })
       });

      //  Admin.getAdminByAdminname(username,function(err,Admin){
      //        if(err){console.log("error"); }
      //        if(!Admin){ return done(null,false,{message : 'Unknown Admin'});}
      //        Admin.comparePassword(password,Admin.password,(err,isMatch)=>{
      //              if(err){console.log("error");}
      //              if(isMatch){ console.log("such Admin is there!!!");
      //                 return done(null,Admin);} 
      //              else {return done(null,false,{message : 'INVALID PASSWORD'})}
      //        })
      //  });
  }
));

passport.serializeUser(function(user, done) {
  console.log("inside api serialization");
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  console.log("inside api deserialization");
  User.getUserById(id, function(err, user) {
    done(err, user);
  });
});

router.post('/login',
  passport.authenticate('local'), 
  function(req, res) {
    console.log("i am user........!!!" + typeof(req.user.role)+"i am user........!!!" + typeof(req.body.role));
    if((req.body.role).toString()=== (req.user.role).toString()){res.json(req.user.username)}
    else{console.log("error ocurred")
  res.json(false)};
     
  });
router.post('/register', function(req, res) {
     var name =req.body.name;
     var email = req.body.email;
     var username = req.body.username;
     var password1= req.body.password1;
     var password2 = req.body.password2;
     var role=req.body.role;

     console.log( req.body.name +" "+
      req.body.email + "  "
     + req.body.username + " "
     + req.body.password1 + " "
     + req.body.password2)

     req.checkBody('name','name required').notEmpty();
     req.checkBody('email','name required').isEmail();
     req.checkBody('username','name required').notEmpty();
     req.checkBody('password2','name required').equals(req.body.password1);
     console.log("all done");
     
     var newUser = new User({
        name:name,
        email:email,
        username:username,
        password : password1,
        role:role
     })
     User.createuser(newUser,function(err,user){
       if(err){console.log("error occured")}
       console.log(user);
       res.json(user);

     });

});


module.exports = router;