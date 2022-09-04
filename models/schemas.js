const mongoose = require("mongoose");

let menuSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  icon: {
    type: Boolean,
    required: true,
  },
  menuUrl: {
    type: String,
    required: true,
  },
  entryDate: {
    type: Date,
    default: Date.now,
  },
});

let usersSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  pwd: {
    type: String,
    required: true,
  },
  entryDate: {
    type: Date,
    default: Date.now,
  },
});


let menu = mongoose.model('menu', menuSchema, 'menu')  //references (1.name of model, 2.schema associated with and 3.optional argument is name of collection)
let users = mongoose.model("users", usersSchema, "users");

let mySchemas = {
    'menu': menu, 
    'users': users, 

}
module.exports = mySchemas
