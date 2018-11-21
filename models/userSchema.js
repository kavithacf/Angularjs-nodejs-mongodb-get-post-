

var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var database = require('../config/database'); // load the database config
 mongoose.createConnection(database.myappUrl,{ useNewUrlParser: true });


const Schema = mongoose.Schema;

const userSchema = new Schema({
	firstname : String,
	username : String,
	password : String 
});

// Export the model
module.exports = mongoose.model('user', userSchema);

// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

// let ProductSchema = new Schema({
//     name: {type: String,
//      required: true,
//       max: 100
//   },
//     price: {type: Number,
//      required: true
//  },
 
// });


// // Export the model
// module.exports = mongoose.model('Product', ProductSchema);

