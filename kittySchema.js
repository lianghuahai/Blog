const mongoose = require('./mongooseConfig');

const kittySchema = mongoose.Schema({
    author: String,

    comment : String
 },{
   versionKey: false
 });
 var Kitten = mongoose.model('Kitten', kittySchema);
 
 module.exports=Kitten;