const mongoose=require('../connection');
var Schema=mongoose.Schema;
var rightSchema= new Schema({
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
    screenurl:{
        type:String,
        required:true,
    },
    status:{
        type:String,
        default:'A',
    }
})
var rightModel=mongoose.model('rights',rightSchema);
module.exports=rightModel;