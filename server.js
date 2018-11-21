// var express = require('express');
// var app = express();
// var bodyParser = require('body-parser');//req and res


// var mongoose = require("mongoose");//database connection
// mongoose.Promise = global.Promise;
// mongoose.connect("mongodb://localhost:27017/company");


// var nameSchema = new mongoose.Schema({//userSchema
//   firstname: String,
//   lastname: String,
//   username: String
 
// });
// var User = mongoose.model("User", nameSchema);// create model

// app.post("/adduser", (req, res) => {//post api for user 
//   var myData = new User(req.body);
//   //callback
//   myData.save( (err,val) => {
//   		if(err){
//       res.status(400).send("unable to save to database");
//   		}
//   		else{
//   		console.log(val);

//   		}
//   });
// });




//mongoose connect
// mongoose.connect('mongodb://localhost/students');
// var db = mongoose.connection;


// app.use('/' (req, res) => {
// 	res.sendFile(__dirname + "/index.html");


// });

// app.get('/' , (req , res) => {
// 	res.send('hello world');
// });

// const index = require('./routes/index');



// app.use('/', index);//direct to index.js form backend




// const allowCrossDomain = function(req, res, next) {
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
//     res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
//     if (req.method === 'OPTIONS') {
//         res.send(200);
//     } else {
//         next();
//     }
// };


//port
// app.listen(8000);
// console.log("server connected");


var express = require('express');
var app = express();
var port = 3000;

var mongoose = require('mongoose');

const config = require('./db');

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));//direct to index



mongoose.connect(config.DB).then(
    () => {console.log('Database is connected') },
    err => { console.log('Can not connect to the database' +err)
});



var nameSchema = new mongoose.Schema({//userSchema
  firstname: String,
  lastname: String,
  username: String
 
});
var User = mongoose.model("User", nameSchema);// create model

 app.post("/adduser", (req, res) => {//post api for user 
  var myData = new User ({
    firstname : req.body.firstname,
    lastname : req.body.lastname,
    username :req.body.username,
  })
   myData.save( (err,docs) => {
      if(err){
      res.status(400).send("unable to save to database");
      }
      else{
        res.status(200).send("user created success");
      console.log(docs);

      }
  });

 });
 


// app.post("/adduser", (req, res) => {//post api for user 
//   var myData = new User(req.body);
//   //callback
//   myData.save( (err,docs) => {
//   		if(err){
//       res.status(400).send("unable to save to database");
//   		}
//   		else{
//         res.status(200).send("user created success");
//   		console.log(docs);

//   		}
//   });
// });







// app.get("/", (req, res) => {
// res.send("Hello World");
// });



// app.use('/' , (req,res) => {
//  res.sendFile(__dirname + "/index.html");
// });

app.listen (port, () => {
	console.log("App listening on the 3000");
});