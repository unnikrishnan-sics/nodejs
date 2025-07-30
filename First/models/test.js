const mongoose=require("mongoose");
const nameSchema=new mongoose.Schema({
    name:{type:String},
});
module.exports=mongoose.model('name',nameSchema);