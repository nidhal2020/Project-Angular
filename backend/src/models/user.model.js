const mongoose = require('mongoose');


const UserSchema = new mongoose.Schema({
    name:{type:String, required:true},
    email:{type:String, required:true, unique:true},
    password:{type:String, required:true},
    address:{type:String, required:true},
    isAdmin:{type:String, required:true},
    token:{type:String}
},{
    toJSON:{
        virtuals:true
    },
    toObject:{
        virtuals: true
    },timestamps:true
});

const model = mongoose.model('User',UserSchema);

module.exports =  schema = model.schema;
module.exports= model;