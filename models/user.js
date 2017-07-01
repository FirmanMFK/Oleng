//use module
var mongoose = require('mongoose');
var Schema = mongoose.Schema;//instants membuat skema collection

//Schema Definition
var userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
  firstname: String,
  lastname: String,
  admin: Boolean,
},
{
    timestamps: true //CreateAt & UpdateAt
});

//Lakukan Preload/Mengisi Data awal untuk collection User

var User = mongoose.model('User', userSchema);

module.exports = User;
