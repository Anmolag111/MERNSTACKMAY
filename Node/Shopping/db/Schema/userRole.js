const mongoose=require('../connection');
var Schema=mongoose.Schema;
var userRoleSchema= new Schema({
    //FK
    userid:{
        type:Schema.Types.ObjectId,
        ref:'userModel',
        required:true,
      },
      roleid:{
        type:Schema.Types.ObjectId,
        ref:'roleModel',
        required:true,
      },
    
    status:{
        type:String,
        default:'A',
    }
})
var userRoleModel=mongoose.model('userrolemapping',userRoleSchema);
module.exports=userRoleModel;