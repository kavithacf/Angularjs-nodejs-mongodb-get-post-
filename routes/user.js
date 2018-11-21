var express = require('express');
const router = express.Router();


var mongoose = require('mongoose');//mongoose to mongodb
mongoose.Promise = global.Promise;
var database = require('../config/database'); // load the database config
 mongoose.createConnection(database.myappUrl,{ useNewUrlParser: true });

  const User = require('../models/userSchema');

// console.log(User)
 router.post('/api/user', (req,res) => {
 	console.log('test');
 	console.log(req.body)
 	/*const user = new User({
    firstname : req.body.firstname,
	username : req.body.username,
	password : req.body.password 
 	});

 	user.save((e) => {
 		if(e) return res.status(400).send(e);
 		res.status(200).send({msg: "Scuess"})
 	})*/
/* 	user.save().then(()=>{
res.status(200).send();
})
.catch((e)=>{
res.send(400).send(e);

});*/


 }); 

//  router.get('/users/signup',(req,res)=>{
// var body=req.body;
// var user=new User(body);
// user.save().then(()=>{
// res.status(200).send();})
// .catch((e)=>{
// res.send(400).send(e);});});


module.exports = router;

 
