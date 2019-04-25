var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var userSchema = new Schema({
    gmail: String,
    access_token: String
})

var User = mongoose.model('User', userSchema);
module.exports = User;