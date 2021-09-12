const mongoose=require('../connection');
var Schema=mongoose.Schema;
var roleSchema= new Schema({
    name:{
        type:String,
        required:true,
        trim:true,
        minlength:3,
        maxlength:30,
    },
    descr:{
        type:String,
        required:true,
    },
    status:{
        type:String,
        default:'A',
    }
})
var roleModel=mongoose.model('role',roleSchema);
module.exports=roleModel;