var express = require('express');
var router = express.Router();
//var Admin = require('../Admin');
//var Admin = require('../admin');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

router.post('/posts', function(req, res) {
    console.log(req.body);
    res.json(req.body);
});
// passport.use(new LocalStrategy( 
//     function(Adminname, password, done) {
//       console.log("inside admin directory")
//        Admin.getAdminByAdminname(Adminname,function(err,Admin){
//              if(err){console.log("error"); }
//              if(!Admin){ return done(null,false,{message : 'Unknown Admin'});}
//              Admin.comparePassword(password,Admin.password,(err,isMatch)=>{
//                    if(err){console.log("error");}
//                    if(isMatch){ console.log("such Admin is there!!!");
//                       return done(null,Admin);} 
//                    else {return done(null,false,{message : 'INVALID PASSWORD'})}
//              })
//        });
//   }
// ));

// passport.serializeUser(function(Admin, done) {
//   done(null, Admin.id);
// });

// passport.deserializeUser(function(id, done) {
//   Admin.getAdminById(id, function(err, Admin) {
//     done(err, Admin);
//   });
// });

router.post('/login',
  passport.authenticate('local'),
  function(req, res) {
    console.log("i am admin!!!");
res.json(true)
  });


 /////////////////////////////////////////////////////////////////////////////////////// 
router.post('/register', function(req, res) {
     var name =req.body.name;
     var email = req.body.email;
     var Adminname = req.body.Adminname;
     var password1= req.body.password1;
     var password2 = req.body.password2;

     console.log( req.body.name +" "+
      req.body.email + "  "
     + req.body.Adminname + " "
     + req.body.password1 + " "
     + req.body.password2)

     req.checkBody('name','name required').notEmpty();
     req.checkBody('email','name required').isEmail();
     req.checkBody('Adminname','name required').notEmpty();
     req.checkBody('password2','name required').equals(req.body.password1);
     console.log("all done");
     
     var newAdmin = new Admin({
        name:name,
        email:email,
        Adminname:Adminname,
        password : password1
     })
     Admin.createAdmin(newAdmin,function(err,Admin){
       if(err){console.log("error occured")}
       console.log(Admin);
       res.json(Admin);

     });

});


module.exports = router;