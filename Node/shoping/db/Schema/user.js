const mongoose=require('../connection');
var Schema=mongoose.Schema;
var userSchema= new Schema({
    userid:{
        type:String,
        required:true,
        trim:true,
    },
    password:{
        type:String,
        required:true,
    },
    status:{
        type:String,
        default:'A',
    }
})
var userModel=mongoose.model('users',userSchema);
module.exports=userModel;