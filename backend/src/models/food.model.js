const mongoose = require('mongoose');


const FoodSchema = new mongoose.Schema({
    //id:{type:String, required:true},
    name:{type:String, required:true},
    price:{type:Number, required:true},
    tags:{type:[String]},
    favorite:{type:Boolean, default:false},
    stars:{type:Number, required:true},
    imageUrl:{type:String, required:true},
    origins:{type:[String], required:true},
    cookTime:{type:String, required:true}
},{
    toJSON:{
        virtuals:true
    },
    toObject:{
        virtuals: true
    },timestamps:true
});

const model = mongoose.model('Food',FoodSchema);

module.exports =  schema = model.schema;
module.exports= model;